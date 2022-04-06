import "./App.css";
import { Title, Tag, ProjectCard } from "./components";

function App() {
  return (
    <div className="w-screen min-h-screen p-2 container m-auto max-w-4xl flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-4">
        <div className=" rounded-lg p-4 flex flex-col gap-2">
          <Title>个人信息</Title>

          <div className="flex gap-4">
            <div className="w-24 h-24 rounded-full overflow-hidden shadow">
              <img
                src="https://avatars.githubusercontent.com/u/43036689?v=4"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="flex gap-2 font-bold items-center text-md">
                <span>胡润融</span>
                <span>Wilson Wu</span>
                <Tag>1997</Tag>
              </h2>
              <p className="text-gray-500 font-light text-sm text-md">
                <span>广州大学</span>
                <span>计算机科学与技术</span>
                <span>本科</span>
              </p>
            </div>
          </div>
        </div>
        <div className=" rounded-lg p-4 flex flex-col gap-2">
          <Title>联系方式</Title>

          <div className="flex text-sm gap-16">
            <ul className="flex flex-col gap-2">
              <li>
                <h2 className="font-bold">Mobile:</h2>
                <p>13265388679</p>
              </li>
              <li>
                <h2 className="font-bold">WeChat:</h2>
                <p>13265388679</p>
              </li>
            </ul>
            <ul className="flex flex-col gap-2">
              <li>
                <h2 className="font-bold">Email:</h2>
                <p>wilson.wu.yy@gmail.com</p>
              </li>
              <li>
                <h2 className="font-bold">Github:</h2>
                <p>https://github.com/WuYunYung</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" rounded-lg p-4 flex flex-col gap-2">
        <Title>工作经历</Title>

        <ul className="list-disc pl-6 flex flex-col gap-8">
          <li>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <div className="flex flex-col gap-2">
                  <div className="flex gap-4">
                    <h2 className="text-md font-bold">
                      广东马上信息科技有限公司
                    </h2>
                    <div>
                      <Tag>2021-05</Tag> - <Tag>至今</Tag>
                    </div>
                  </div>
                  <p className="text-sm flex gap-2">
                    <span className="font-bold">主要工作内容：</span>
                    <span className="text-gray-500">
                      云课堂相关业务开发与维护
                    </span>
                  </p>
                </div>
                <div className="text-sm">
                  <span className="font-bold">职位：</span>
                  <span className="text-gray-500">前端开发工程师</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="grid grid-cols-2 gap-2">
                  <ProjectCard
                    title="鹤壁智慧教育平台"
                    address="https://edu.hebi.cn/"
                    tags={["lerna", "nuxt"]}
                  >
                    基于Nuxt的SSR项目
                  </ProjectCard>
                  <ProjectCard
                    title="智慧教育云"
                    address="https://m.vxiao.cn/"
                    tags={["vue", "vue-router", "vuex", "sass", "i18n"]}
                  >
                    主要负责其中直播业务的内容
                  </ProjectCard>
                  <ProjectCard
                    title="云课堂*"
                    tags={[
                      "vue",
                      "vue-router",
                      "vuex",
                      "sass",
                      "mpegts.js",
                      "TRTC",
                    ]}
                  >
                    <p>主要功能为直播、互动</p>
                    <p>主要负责上下线授权等逻辑部分的重构</p>
                    <p>流功能主要通过 mpegts.js & TRTC 实现</p>
                  </ProjectCard>
                  <ProjectCard
                    title="移动端基础建设*"
                    tags={["react", "hooks", "taro", "typescript"]}
                  >
                    <p>同构移动端和微信小程序</p>
                    <p>主要负责弹窗类基础组件开发，以及通用功能基座开发</p>
                  </ProjectCard>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <div className="flex flex-col gap-2">
                  <div className="flex gap-4">
                    <h2 className="text-md font-bold">Kanar Profiles</h2>
                    <div>
                      <Tag>2019-07 </Tag> - <Tag>2021-05</Tag>
                    </div>
                  </div>
                  <p className="text-sm flex gap-2">
                    <span className="font-bold">主要工作内容：</span>
                    <span className="text-gray-500">
                      基于Decipher平台的问卷编程
                    </span>
                  </p>
                </div>
                <div className="text-sm">
                  <span className="font-bold">职位：</span>
                  <span className="text-gray-500">Survey Programmer</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="grid grid-cols-2 gap-2">
                  <ProjectCard
                    title="voice-to-text"
                    tags={["jQuery", "Bootstrap", "python", "Django"]}
                  >
                    语音转文字功能
                  </ProjectCard>
                  <ProjectCard title="survey-cli" tags={["nodejs"]}>
                    Decipher子项目构建工具
                  </ProjectCard>
                </div>
                <ProjectCard
                  title="link-generator"
                  tags={["vue", "Bootstrap"]}
                  address="http://119.23.252.8/"
                >
                  Decipher链接生成和记录
                </ProjectCard>
              </div>
            </div>
          </li>
          <li>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <div className="flex flex-col gap-2">
                  <div className="flex gap-4">
                    <h2 className="text-md font-bold">个人项目</h2>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <ProjectCard
                  title="zs-site"
                  tags={["vue", "Nuxtjs", "tailwindcss"]}
                  address="http://zs-site-5g0jtncv63f52ccd-1259648041.tcloudbaseapp.com/"
                >
                  可以运行在多种设备上的官网
                </ProjectCard>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
