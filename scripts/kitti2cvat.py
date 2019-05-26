import argparse
import xmltodict as x2d
from collections import OrderedDict
from utils.kitti2bdd import transform_kitti

"""
Usage:
kitti2bdd.py --annDir=<path> --imdir=<path> --xml=<template-xml-path> --save_path=<output>.xml [--gt]

If the annotation directory contains groundtruth annotations then use --gt
"""


def xml2dict(xml):
    if not xml:
        return {xml.tag: [xml.text, xml.attrib]}
    result = {}
    for child in xml:
        child_result = xml2dict(child)
        if child.tag != 'object':
            result[child.tag] = child_result[child.tag]
        else:
            if child.tag not in result:
                result[child.tag] = []
            result[child.tag].append(child_result[child.tag])
    return {xml.tag: result}


def parse_arguments():
    # parse the arguments
    parser = argparse.ArgumentParser(description='kitti to bdd')
    parser.add_argument(
        "--annDir",
        default="/path/to/kitti/label/files",
        help="path to directory containing kitti label files",
    )
    parser.add_argument(
        "--xml",
        default="/path/to/cvat_xml_template",
        help="path to cvat xml template",
    )
    parser.add_argument(
        "--save_path",
        default="/save/path",
        help="path to save bdd formatted label file",
    )
    parser.add_argument(
        "--imext",
        default=".png",
        help="image file extension",
    )
    parser.add_argument(
        "--gt",
        action='store_true',
        help="groundtruth annotation",
    )
    return parser.parse_args()


def bdd2cvat(xml_file, bdd):
    with open(xml_file, 'rb') as fid:
        xml_str = fid.read()
    xml = x2d.parse(xml_str)

    xml['annotations']['image'] = []
    all_labels = []
    for idx, elem in enumerate(bdd):
        # build bbox element
        object_elements = []
        for obj in elem['labels']:
            bbox2d = obj['box2d']
            all_labels.append(obj['category'])
            object_elements.append(OrderedDict([('@label', '{}'.format(obj['category'])),
                                                ('@xtl', '{}'.format(bbox2d['x1'])),
                                                ('@ytl', '{}'.format(bbox2d['y1'])),
                                                ('@xbr', '{}'.format(bbox2d['x2'])),
                                                ('@ybr', '{}'.format(bbox2d['y2'])),
                                                ('@occluded', '0')]))
        # TODO: load image to get the width and height

        # build image element
        image_element = OrderedDict([('@id', '{}'.format(idx)),
                                     ('@name', '{}'.format(elem['name'])),
                                     ('@width', '-1'),
                                     ('@height', '-1'),
                                     ('box', object_elements)
                                     ])
        xml['annotations']['image'].append(image_element)
    print(set(all_labels))
    return xml


def main():
    args = parse_arguments()
    print(args)
    bdd_labels = transform_kitti(args.annDir, args.imext, args.gt)
    xml = bdd2cvat(args.xml, bdd_labels)

    with open(args.save_path, 'w') as fid:
        x2d.unparse(xml, fid)


if __name__ == '__main__':
    main()
