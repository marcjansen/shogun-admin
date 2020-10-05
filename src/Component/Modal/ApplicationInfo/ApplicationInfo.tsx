import React, {
  useState, ReactElement
} from 'react';

import {
  Modal,
  Statistic
} from 'antd';

import { ModalProps } from 'antd/lib/modal';

import logo from '../../../../assets/img/shogun_logo.png';

import './ApplicationInfo.less';

interface ApplicationInfoProps extends ModalProps {
  opener?: ReactElement;
  appInfo: any;
}

export const ApplicationInfo: React.FC<ApplicationInfoProps> = props => {

  const [isVisible, setVisible] = useState<boolean>(false);

  const toggleVisibility = () => {
    setVisible(!isVisible);
  };

  const {
    opener,
    appInfo,
    ...restProps
  } = props;

  let Opener;
  if (opener) {
    Opener = React.cloneElement(
      opener,
      {
        onClick: toggleVisibility
      }
    );
  } else {
    Opener = <button onClick={toggleVisibility}>Open</button>;
  }

  return (
    <>
      {
        Opener
      }
      <Modal
        title="Application Info"
        centered={true}
        visible={isVisible}
        onOk={toggleVisibility}
        onCancel={toggleVisibility}
        footer={null}
        {...restProps}
      >
        <img
          className="shogun-logo"
          src={logo}
        />
        <Statistic
          title="Version"
          value={appInfo.version}
        />
        <Statistic
          title="Build"
          value={appInfo.buildTime}
        />
      </Modal>
    </>
  );
};

export default ApplicationInfo;