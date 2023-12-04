import React from "react";
import { Icon } from "../assets/icons/Icon";

function Education() {
  return (
    <div class="flex-wrap inline-flex gap-2 py-2">
        <a href="https://github.com/dancard32">
          <Icon nameIcon={"FaGithub"} propsIcon={{ size: 20 }} />
        </a>
        <a href="https://www.linkedin.com/in/dan-card/">
          <Icon nameIcon={"FaLinkedin"} propsIcon={{ size: 20 }} />
        </a>
        <a href="dcard@umich.edu">
          <Icon nameIcon={"SiGmail"} propsIcon={{ size: 20 }} />
        </a>
    </div>
  );
}

export default Education;
