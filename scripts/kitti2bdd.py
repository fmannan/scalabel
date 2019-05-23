import json
import os
import argparse

"""
Usage:
kitti2bdd.py --annDir=<path> --save_path=<output>.json [--gt]

If the annotation directory contains groundtruth annotations then use --gt
"""


def parse_arguments():
    # parse the arguments
    parser = argparse.ArgumentParser(description='kitti to bdd')
    parser.add_argument(
        "--annDir",
        default="/path/to/coco/label/file",
        help="path to directory containing kitti label files",
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


def transform_kitti(annDir, imext='.png', gt_file=True):
    files = os.listdir(annDir)

    bdd_label = []
    for file in files:
        if not file.endswith('.txt'):
            continue

        with open(os.path.join(annDir, file)) as fid:
            data = fid.read().splitlines()

        img_filename = os.path.splitext(file)[0] + imext
        det_dict = {}
        det_dict["name"] = img_filename
        det_dict["url"] = img_filename
        det_dict["attributes"] = {"weather": "undefined",
                                  "scene": "undefined",
                                  "timeofday": "undefined"}
        det_dict["frameIndex"] = 0  # TODO
        det_dict["intrinsics"] = {"focal": [100, 100],  # TODO
                                  "center": [0, 0],
                                  "nearClip": 0
                                  }
        det_dict["extrinsics"] = {"location": [0, 0, 0],  # TODO
                                  "rotation": [0, 0, 0]
                                  }
        # TODO: attributes
        # ...

        det_dict["labels"] = []
        for row in data:
            cols = row.split(' ')
            if gt_file:
                cols = cols + [1.00]
            category = ' '.join(cols[:-15])
            bbox2d = cols[-12:-8]
            alpha = float(cols[-13])
            bbox3d = cols[-8:-1]
            # confidence = cols[-1]

            label = {"id": 0,
                     "category": category,
                     "manualShape": True,
                     "manualAttributes": True,
                     "box2d": {
                       "x1": float(bbox2d[0]),
                       "y1": float(bbox2d[1]),
                       "x2": float(bbox2d[2]),
                       "y2": float(bbox2d[3]),
                     },
                     'box3d': {
                         'alpha': alpha,
                         'orientation': float(bbox3d[-1]),
                         'location': [float(x) for x in bbox3d[3:6]],
                         'dimension': [float(x) for x in bbox3d[0:3]]
                     }}
            det_dict["labels"].append(label)
        bdd_label.append(det_dict)
    return bdd_label


def main():
    args = parse_arguments()
    print(args)
    bdd_label = transform_kitti(args.annDir, args.imext, args.gt)
    with open(args.save_path, 'w') as outfile:
        json.dump(bdd_label, outfile)


if __name__ == '__main__':
    main()

