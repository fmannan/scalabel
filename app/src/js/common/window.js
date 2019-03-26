import React from 'react';
import ReactDOM from 'react-dom';
import LabelLayout from '../components/label_layout';
import TitleBar from '../components/title_bar';
import Session from './session';
import Path from './path';
import List from '@material-ui/core/List';
import {ToolBar} from '../components/image_toolbar';
import MainView from '../components/main_view';
import ImageView from '../components/image_view';

/**
 * Manage the whole window
 */
export class Window {
  container: Element;

  /**
   * Window constructor
   * @param {string} containerName: name of the container in HTML to
   * place this window
   */
  constructor(containerName: string) {
    let container = document.getElementById(containerName);
    if (container === null) {
      console.error('Cannot find ' + containerName);
    } else {
      this.container = container;
    }
  }

  /**
   * Function to render the interface
   */
  render() {
    /* LabelLayout props:
         * titleBar: required
         * main: required
         * leftSidebar1: required
         * leftSidebar2: optional
         * bottomBar: optional
         * rightSidebar1: optional
         * rightSidebar2: optional
         */
    const state = Session.getState();

    // get all the components
    const titleBar = (
        <TitleBar
            title={state.config.pageTitle}
            instructionLink={state.config.instructionPage}
            dashboardLink={Path.vendorDashboard()}
        />
    );
    const leftSidebar1 = (
          <List>{ToolBar}</List>
      );
    /* const leftSidebar1 = (<ToolBar/>); // just replace this*/
    const imageView = (<ImageView key={'imageView'}/>);
    const main = (<MainView views={[imageView]} />);
    const bottomBar = (<div>3</div>);
    const rightSidebar1 = (<div>4</div>);
    const rightSidebar2 = (<div>5</div>);
    // render the interface
    ReactDOM.render(
        <LabelLayout
            titleBar={titleBar}
            leftSidebar1={leftSidebar1}
            bottomBar={bottomBar}
            main={main}
            rightSidebar1={rightSidebar1}
            rightSidebar2={rightSidebar2}
        />,
        this.container
    );
  }
}

export type WindowType = Window;
