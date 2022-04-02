import React from "react";

import { ReactComponent as JavaIcon } from "./java.svg";
import { ReactComponent as PythonIcon } from "./python.svg";
import { ReactComponent as PrivateIcon } from "./private.svg";
import { ReactComponent as PublicIcon } from "./pubplic.svg";
import { ReactComponent as AwsS3Icon } from "./aws-s3.svg";
import { ReactComponent as AwsMqIcon } from "./aws-mq.svg";
import { ReactComponent as AwsEcIcon } from "./aws-elastic-cache.svg";

type iconMapperType = {
  [key: string]: React.FC<React.SVGProps<SVGSVGElement>>;
};

const iconMapper: iconMapperType = {
  java: JavaIcon,
  python: PythonIcon,
  aws_mq_broker: AwsMqIcon,
  aws_elasticache_cluster: AwsEcIcon,
  aws_s3_bucket: AwsS3Icon,
  private: PrivateIcon,
  public: PublicIcon,
};

const Icon = ({ type = "" }) => {
  const SelectedIcon = iconMapper[type.toLowerCase()];
  if (!SelectedIcon) return null;

  return <SelectedIcon className="w-5 h-5 mr-1" />;
};

export default Icon;
