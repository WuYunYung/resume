import './App.css';

function App() {
  return (
    <div className="w-screen min-h-screen p-2 container m-auto max-w-4xl flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="shadow rounded-lg p-4 flex flex-col gap-2">
          <h1 className="text-lg font-bold">个人信息</h1>
          <hr />
          <div className="flex gap-4">
            <div className="w-28 rounded overflow-hidden shadow">
              <img src="https://avatars.githubusercontent.com/u/43036689?v=4" alt="" />
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="flex gap-2 font-bold items-center text-md">
                <span>胡润融</span>
                <span>Wilson Wu</span>
                <span className="font-light bg-gray-300 rounded-full px-2 text-sm">1997</span>
              </h2>
              <p className="text-gray-500 font-light text-sm text-md">
                <span>广州大学</span>
                <span>计算机科学与技术</span>
                <span>本科</span>
              </p>
              <ul className="flex flex-col gap-2 text-md">
                <li>工作年限: 2年</li>
                <li>期望职位: 前端开发工程师</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="shadow rounded-lg p-4 flex flex-col gap-2">
          <h1 className="text-lg font-bold">联系方式</h1>
          <hr />
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
              <li>
                <h2 className="font-bold">QQ:</h2>
                <p>281692231</p>
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
      <div className="shadow rounded-lg p-4 flex flex-col gap-2">
        <h1 className="text-lg font-bold">工作经历</h1>
        <hr />
        <ul className="list-disc pl-6 flex flex-col gap-8">
          <li>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <div className="flex flex-col gap-2">
                  <div className="flex gap-4">
                    <h2 className="text-md font-bold">Kanar Profiles</h2>
                    <div>
                      <span className="font-light bg-gray-300 rounded-full px-2 text-sm">2019-07</span>
                      -
                      <span className="font-light bg-gray-300 rounded-full px-2 text-sm">2021-05</span>
                    </div>
                  </div>
                  <p className="text-sm flex gap-2">
                    <span className="font-bold">主要工作内容：</span>
                    <span className="text-gray-500">基于Decipher平台的问卷编程</span>
                  </p>
                </div>
                <div className="text-sm">
                  <span className="font-bold">职位：</span>
                  <span className="text-gray-500">Survey Programmer</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="grid grid-cols-2 gap-2">
                  <div className="border p-4 rounded-md flex flex-col gap-1">
                    <h2 className="text-sm font-bold">voice-to-text</h2>
                    <p className=" text-sm text-gray-500">语音转文字功能</p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="font-light bg-gray-300 rounded-full px-2 text-sm">jQuery</span>
                      <span className="font-light bg-gray-300 rounded-full px-2 text-sm">Bootstrap</span>
                      <span className="font-light bg-gray-300 rounded-full px-2 text-sm">python</span>
                      <span className="font-light bg-gray-300 rounded-full px-2 text-sm">Django</span>
                    </div>
                  </div>
                  <div className="border p-4 rounded-md flex flex-col gap-1">
                    <h2 className="text-sm font-bold">survey-cli</h2>
                    <p className="text-sm text-gray-500">Decipher子项目构建工具</p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="font-light bg-gray-300 rounded-full px-2 text-sm">nodejs</span>
                    </div>
                  </div>
                </div>
                <div className="border p-4 rounded-md flex flex-col gap-1">
                  <h2 className="text-sm font-bold">link-generator</h2>
                  <p className="text-sm text-gray-500">Decipher链接生成和记录</p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="font-light bg-gray-300 rounded-full px-2 text-sm">vue</span>
                    <span className="font-light bg-gray-300 rounded-full px-2 text-sm">vue-router</span>
                    <span className="font-light bg-gray-300 rounded-full px-2 text-sm">vuex</span>
                    <span className="font-light bg-gray-300 rounded-full px-2 text-sm">sass</span>
                    <span className="font-light bg-gray-300 rounded-full px-2 text-sm">tailwind</span>
                    <span className="font-light bg-gray-300 rounded-full px-2 text-sm">element-ui</span>
                    <span className="font-light bg-gray-300 rounded-full px-2 text-sm">cloud-base</span>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <div className="flex flex-col gap-2">
                  <div className="flex gap-4">
                    <h2 className="text-md font-bold">广东马上信息科技有限公司</h2>
                    <div>
                      <span className="font-light bg-gray-300 rounded-full px-2 text-sm">2021-05</span>
                      -
                      <span className="font-light bg-gray-300 rounded-full px-2 text-sm">至今</span>
                    </div>
                  </div>
                  <p className="text-sm flex gap-2">
                    <span className="font-bold">主要工作内容：</span>
                    <span className="text-gray-500">云课堂相关业务开发与维护</span>
                  </p>
                </div>
                <div className="text-sm">
                  <span className="font-bold">职位：</span>
                  <span className="text-gray-500">前端开发工程师</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="grid grid-cols-2 gap-2">
                  <div className="border p-4 rounded-md flex flex-col gap-1">
                    <h2 className="text-sm font-bold">鹤壁智慧教育平台</h2>
                    <div className="text-sm">
                      <span className="font-bold">地址：</span>
                      <span className="text-gray-500">https://edu.hebi.cn/</span>
                    </div>
                    <p className="text-sm text-gray-500">基于Nuxt的SSR项目，主要难点是日历组件的开发</p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="font-light bg-gray-300 rounded-full px-2 text-sm">lerna</span>
                      <span className="font-light bg-gray-300 rounded-full px-2 text-sm">nuxt</span>
                    </div>
                  </div>
                  <div className="border p-4 rounded-md flex flex-col gap-1">
                    <h2 className="text-sm font-bold">智慧教育云</h2>
                    <div className="text-sm">
                      <span className="font-bold">地址：</span>
                      <span className="text-gray-500">https://m.vxiao.cn/</span>
                    </div>
                    <p className="text-sm text-gray-500">主要负责其中直播业务的内容，包括设置，报表，卡片等等</p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="font-light bg-gray-300 rounded-full px-2 text-sm">vue</span>
                      <span className="font-light bg-gray-300 rounded-full px-2 text-sm">vue-router</span>
                      <span className="font-light bg-gray-300 rounded-full px-2 text-sm">vuex</span>
                      <span className="font-light bg-gray-300 rounded-full px-2 text-sm">sass</span>
                      <span className="font-light bg-gray-300 rounded-full px-2 text-sm">element-ui</span>
                      <span className="font-light bg-gray-300 rounded-full px-2 text-sm">i18n</span>
                    </div>
                  </div>
                </div>
                <div className="border p-4 rounded-md flex flex-col gap-1">
                  <h2 className="text-sm font-bold">云课堂</h2>
                  <p className="text-sm text-gray-500">云课堂主项目，主要负责重构、新功能和维护</p>
                  <p className="text-sm text-gray-500">项目难点主要在于，不同层级的逻辑封装，以及涉及socket的主/被动逻辑</p>
                  <p className="text-sm text-gray-500">流功能主要通过 mpegts.js & TRTC 实现</p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="font-light bg-gray-300 rounded-full px-2 text-sm">lerna</span>
                    <span className="font-light bg-gray-300 rounded-full px-2 text-sm">vue</span>
                    <span className="font-light bg-gray-300 rounded-full px-2 text-sm">vue-router</span>
                    <span className="font-light bg-gray-300 rounded-full px-2 text-sm">vuex</span>
                    <span className="font-light bg-gray-300 rounded-full px-2 text-sm">sass</span>
                    <span className="font-light bg-gray-300 rounded-full px-2 text-sm">canvas</span>
                    <span className="font-light bg-gray-300 rounded-full px-2 text-sm">element-ui</span>
                    <span className="font-light bg-gray-300 rounded-full px-2 text-sm">mpegts.js</span>
                    <span className="font-light bg-gray-300 rounded-full px-2 text-sm">TRTC</span>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
