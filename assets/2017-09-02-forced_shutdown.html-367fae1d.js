const e=JSON.parse('{"key":"v-c914fd10","path":"/posts/2017-09-02-forced_shutdown.html","title":"电脑关机了，第二天一看确又开着的？让系统正常关机！","lang":"zh-CN","frontmatter":{"title":"电脑关机了，第二天一看确又开着的？让系统正常关机！","date":"2017-09-02T00:38:00.000Z","category":["系统"],"tag":["关机"],"order":-5,"description":"晚上明明按下电脑的关机键，第二天早上却发现电脑开了一晚上？这是因为后台和 GUI 应用程序在阻止或取消关机，使得系统无法正常关机。为解决此问题，可以按照以下方法授予系统自动关机权限。 手工操作 点击「开始菜单」，搜索「Regedit」，进入注册表编辑器。 打开窗口后，向注册表上方菜单输入路径 计算机\\\\HKEY_CURRENT_USER\\\\Control Panel\\\\Desktop。 在右侧窗格中找到 AutoEndTasks 键值。若不存在，则新建一个名为 AutoEndTasks 的「字符串值」，并将键值的数值设为 1。AutoEndTasks 表示自动结束失去响应的程序任务。0 表示 false（默认值），而 1 表示 true，电脑会自动结束失去响应的程序。 查找或创建 WaitToKillAppTimeout 字符串值，并设定其数值为 2000。2000 以毫秒计，表示在程序失去响应后，系统将等待 2 秒后自动结束相应程序。","head":[["meta",{"property":"og:url","content":"https://newzone.top/posts/2017-09-02-forced_shutdown.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"电脑关机了，第二天一看确又开着的？让系统正常关机！"}],["meta",{"property":"og:description","content":"晚上明明按下电脑的关机键，第二天早上却发现电脑开了一晚上？这是因为后台和 GUI 应用程序在阻止或取消关机，使得系统无法正常关机。为解决此问题，可以按照以下方法授予系统自动关机权限。 手工操作 点击「开始菜单」，搜索「Regedit」，进入注册表编辑器。 打开窗口后，向注册表上方菜单输入路径 计算机\\\\HKEY_CURRENT_USER\\\\Control Panel\\\\Desktop。 在右侧窗格中找到 AutoEndTasks 键值。若不存在，则新建一个名为 AutoEndTasks 的「字符串值」，并将键值的数值设为 1。AutoEndTasks 表示自动结束失去响应的程序任务。0 表示 false（默认值），而 1 表示 true，电脑会自动结束失去响应的程序。 查找或创建 WaitToKillAppTimeout 字符串值，并设定其数值为 2000。2000 以毫秒计，表示在程序失去响应后，系统将等待 2 秒后自动结束相应程序。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-10T07:17:40.000Z"}],["meta",{"property":"article:author","content":"清顺"}],["meta",{"property":"article:tag","content":"关机"}],["meta",{"property":"article:published_time","content":"2017-09-02T00:38:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-10T07:17:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"电脑关机了，第二天一看确又开着的？让系统正常关机！\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2017-09-02T00:38:00.000Z\\",\\"dateModified\\":\\"2023-09-10T07:17:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"清顺\\",\\"url\\":\\"https://newzone.top\\"}]}"]]},"headers":[{"level":2,"title":"手工操作","slug":"手工操作","link":"#手工操作","children":[]},{"level":2,"title":"通过脚本修改","slug":"通过脚本修改","link":"#通过脚本修改","children":[{"level":3,"title":"注册表脚本修改","slug":"注册表脚本修改","link":"#注册表脚本修改","children":[]},{"level":3,"title":"cmd 修改","slug":"cmd-修改","link":"#cmd-修改","children":[]},{"level":3,"title":"PowerShell 修改","slug":"powershell-修改","link":"#powershell-修改","children":[]}]}],"git":{"createdTime":1694330260000,"updatedTime":1694330260000,"contributors":[{"name":"Xuyang","email":"144583451+XuyangHub@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.65,"words":794},"filePathRelative":"_posts/2017-09-02-forced_shutdown.md","localizedDate":"2017年9月2日","excerpt":"<p>晚上明明按下电脑的关机键，第二天早上却发现电脑开了一晚上？这是因为后台和 GUI 应用程序在阻止或取消关机，使得系统无法正常关机。为解决此问题，可以按照以下方法授予系统自动关机权限。</p>\\n<h2> 手工操作</h2>\\n<ol>\\n<li>\\n<p>点击「开始菜单」，搜索「Regedit」，进入注册表编辑器。</p>\\n</li>\\n<li>\\n<p>打开窗口后，向注册表上方菜单输入路径 <code>计算机\\\\HKEY_CURRENT_USER\\\\Control Panel\\\\Desktop</code>。</p>\\n</li>\\n<li>\\n<p>在右侧窗格中找到 <code>AutoEndTasks</code> 键值。若不存在，则新建一个名为 <code>AutoEndTasks</code> 的「字符串值」，并将键值的数值设为 <code>1</code>。AutoEndTasks 表示自动结束失去响应的程序任务。<code>0</code> 表示 false（默认值），而 <code>1</code> 表示 true，电脑会自动结束失去响应的程序。</p>\\n<figure><img src=\\"https://pic3.zhimg.com/v2-c643b9737b35f9dd9a8382c5653e3d3e_r.jpg\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n</li>\\n<li>\\n<p>查找或创建 <code>WaitToKillAppTimeout</code> 字符串值，并设定其数值为 2000。2000 以毫秒计，表示在程序失去响应后，系统将等待 2 秒后自动结束相应程序。</p>\\n</li>\\n</ol>","autoDesc":true}');export{e as data};
