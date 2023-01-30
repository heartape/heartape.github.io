(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{528:function(s,a,n){"use strict";n.r(a);var e=n(0),t=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_1-docker基本命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-docker基本命令"}},[s._v("#")]),s._v(" 1.docker基本命令")]),s._v(" "),a("ul",[a("li",[s._v("卸载docker")])]),s._v(" "),a("blockquote",[a("p",[s._v("yum remove docker docker-client docker-client-latest docker-common docker-latest docker-latest-logrotate docker-logrotate docker-engine")])]),s._v(" "),a("ul",[a("li",[s._v("配置镜像")])]),s._v(" "),a("blockquote",[a("p",[s._v("yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo")])]),s._v(" "),a("ul",[a("li",[s._v("安装")])]),s._v(" "),a("blockquote",[a("p",[s._v("yum install docker-ce docker-ce-cli containerd.io")])]),s._v(" "),a("ul",[a("li",[s._v("启动")])]),s._v(" "),a("blockquote",[a("p",[s._v("systemctl start docker")])]),s._v(" "),a("ul",[a("li",[s._v("关闭")])]),s._v(" "),a("blockquote",[a("p",[s._v("systemctl stop docker")])]),s._v(" "),a("ul",[a("li",[s._v("设置开机自启动")])]),s._v(" "),a("blockquote",[a("p",[s._v("systemctl enable docker")])]),s._v(" "),a("ul",[a("li",[s._v("查看docker状态")])]),s._v(" "),a("blockquote",[a("p",[s._v("docker -v")])]),s._v(" "),a("ul",[a("li",[s._v("配置镜像加速")])]),s._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('mkdir -p /etc/docker\ntee /etc/docker/daemon.json &lt;&lt;-\'EOF\'\n{\n  "registry-mirrors": ["https://chqac97z.mirror.aliyuncs.com"]\n}\nEOF\nsystemctl daemon-reload\nsystemctl restart docker\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("ul",[a("li",[a("p",[s._v("查看当前正在运行的容器\ndocker ps")])]),s._v(" "),a("li",[a("p",[s._v("查看所有的容器\ndocker ps -a")])]),s._v(" "),a("li",[a("p",[s._v("停止全部运行中的容器\ndocker stop $(docker ps -q)")])]),s._v(" "),a("li",[a("p",[s._v("启动容器\ndocker start 容器ID或容器名")])]),s._v(" "),a("li",[a("p",[s._v("重新启动容器\ndocker restart 容器ID或容器名")])]),s._v(" "),a("li",[a("p",[s._v("删除docker中的容器\ndocker rm 容器id")])]),s._v(" "),a("li",[a("p",[s._v("删除全部容器\ndocker rm $(docker ps -aq)")])]),s._v(" "),a("li",[a("p",[s._v("查看当前images\ndocker images")])]),s._v(" "),a("li",[a("p",[s._v("删除image\ndocker rmi + (image id)")])]),s._v(" "),a("li",[a("p",[s._v("监控docker状态\ndocker stats")])])]),s._v(" "),a("p",[s._v("设置自动补全")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("yum -y install bash-completion")])]),s._v(" "),a("li",[a("p",[s._v("source /usr/share/bash-completion/completions/docker")])]),s._v(" "),a("li",[a("p",[s._v("source /usr/share/bash-completion/bash_completion")])]),s._v(" "),a("li",[a("p",[s._v("防火墙")])])]),s._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("#查看开放的端口\nfirewall-cmd --list-ports\n#开放3306端口\nfirewall-cmd --add-port=3306/tcp --permanent\n#移除开放6379端口\nfirewall-cmd --permanent --remove-port=6379/tcp\n#重启防火墙\nsystemctl restart firewalld.service\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"_2-docker安装mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-docker安装mysql"}},[s._v("#")]),s._v(" 2.docker安装mysql")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker pull mysql:5.7(或者8.0.25)\n\n# --name指定容器名字 -v目录挂载 -p指定端口映射 -e设置mysql参数 -d后台运行\n# linux中的/mydata/mysql/log对应容器中的/var/log/mysql\ndocker run -p 3306:3306 --name mysql \\\n-v /mydata/mysql/log:/var/log \\\n-v /mydata/mysql/data:/var/lib/mysql \\\n-v /mydata/mysql/files:/var/lib/mysql-files \\\n-v /mydata/mysql/conf:/etc/mysql \\\n-e MYSQL_ROOT_PASSWORD=root \\\n-d mysql:8.0.27\n\n# 上面命令可能会无法启动容器\n# 1.彻底卸载原先系统中与mysql相关的内容\n# 2.清空挂载文件夹\n\n# 查看运行中的容器\ndocker ps\n\n# 配置文件\n[client]\ndefault-character-set=utf8\n[mysql]\ndefault-character-set=utf8\n[mysqld]\ninit_connect='SET collation_connection = utf8_unicode_ci'\ninit_connect='SET NAMES utf8'\ncharacter-set-server=utf8\ncollation-server=utf8_unicode_ci\nskip-character-set-client-handshake\nskip-name-resolve\n\n# 进入容器内部,查看有没有生成my.conf\ndocker exec -it mysql /bin/bash\ncd /etc/mysql/\ncat my.conf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br")])]),a("h2",{attrs:{id:"_3-docker安装redis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-docker安装redis"}},[s._v("#")]),s._v(" 3.docker安装redis")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('docker pull redis\n// 非完整的启动命令\ndocker run --name some-redis -d redis\n// 在虚拟机中创建文件,如果直接挂载的话docker会以为挂载的是一个目录\nmkdir -p /mydata/redis/conf\ntouch /mydata/redis/conf/redis.conf\n// 完整的启动命令,-d:加载配置文件,--:redis配置\ndocker run -p 6379:6379 --name redis \\\n-v /mydata/redis/data:/data \\\n-v /mydata/redis/conf:/etc/redis/redis.conf \\\n-d redis:6.2.6 redis-server /etc/redis/redis.conf \\\n--bind 0.0.0.0 \\\n--timeout 1000 \\\n--tcp-keepalive 300 \\\n--databases 2 \\\n--save 3600 1 \\\n--stop-writes-on-bgsave-error yes \\\n--rdbcompression yes \\\n--rdbchecksum yes \\\n--dbfilename dump.rdb \\\n--rdb-del-sync-files no \\\n--repl-diskless-load disabled \\\n--appendonly yes \\\n--appendfilename "appendonly.aof" \\\n--appendfsync everysec \\\n--no-appendfsync-on-rewrite no \\\n--aof-use-rdb-preamble yes\n\n# 进入redis客户端\ndocker exec -it redis redis-cli\n# 设置redis容器在docker启动的时候启动\ndocker update redis --restart=always\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br")])]),a("h2",{attrs:{id:"_4-docker安装nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-docker安装nginx"}},[s._v("#")]),s._v(" 4.docker安装nginx")]),s._v(" "),a("h3",{attrs:{id:"_1-创建nginx容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建nginx容器"}},[s._v("#")]),s._v(" 1.创建nginx容器")]),s._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker pull nginx:1.10\n# 随便启动一个nginx实例，只是为了复制出配置文件，放到docker里作为镜像的统一配置\ndocker run -p 80:80 -p 443:443 --name nginx -d nginx:1.10\n\ncd /mydata/\nmkdir nginx\ndocker container cp nginx:/etc/nginx .\n然后在外部 /mydata/nginx/ 有了一堆文件\nmv /mydata/nginx/ /mydata/nginx/conf\n# 停掉nginx\ndocker stop nginx\ndocker rm nginx\n#文件夹改名\nmv nginx conf\n#创建新的nginx文件夹\nmkdir nginx\n#将conf移动到nginx里\nmv conf/ nginx\n\n# 创建新的nginx\ndocker run -p 80:80 -p 443:443 --name nginx \\\n-v /mydata/nginx/html:/usr/share/nginx/html \\\n-v /mydata/nginx/logs:/var/log/nginx \\\n-v /mydata/nginx/conf:/etc/nginx \\\n-d nginx:1.10\n\n# 注意一下这个路径映射到了/usr/share/nginx/html，我们在nginx配置文件中是写/usr/share/nginx/html，不是写/mydata/nginx/html\n\n# 自启动\ndocker update nginx --restart=always\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br")])]),a("h3",{attrs:{id:"_2-时区配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-时区配置"}},[s._v("#")]),s._v(" 2. 时区配置")]),s._v(" "),a("p",[s._v("nginx日志输出时间时区不正确")]),s._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("1. 启动项(未验证)\n-v /etc/localtime:/etc/localtime\n\n2. 进入容器修改\n# 进入容器\ndocker exec -it nginx bash\n# 设置时区\nTZ='Asia/Shanghai'; export\n# 保存，否则不生效，重启会还原\ncp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime\n\n3.docker-compose.yml(未验证)\nenvironment: TZ='Asia/Shanghai'\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h2",{attrs:{id:"_5-elasticsearch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-elasticsearch"}},[s._v("#")]),s._v(" 5.ElasticSearch")]),s._v(" "),a("h3",{attrs:{id:"_1-安装elasticsearch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装elasticsearch"}},[s._v("#")]),s._v(" 1.安装ElasticSearch")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker pull elasticsearch:7.4.2\ndocker pull kibana:7.4.2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('# 将docker里的目录挂载到linux的/mydata目录中\n# 修改/mydata就可以改掉docker里的\nmkdir -p /mydata/elasticsearch/config\nmkdir -p /mydata/elasticsearch/data\n\n# es可以被远程任何机器访问\necho "http.host: 0.0.0.0" >/mydata/elasticsearch/config/elasticsearch.yml\n\n# 递归更改权限，es需要访问\nchmod -R 777 /mydata/elasticsearch/\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('# 9200是用户交互端口,发送rest api请求的端口; 9300是集群心跳端口通信端口\n# -e指定是单阶段运行\ndocker run --name elasticsearch -p 9200:9200 -p 9300:9300 \\\n-e "discovery.type=single-node" \\\n# jvm参数，指定占用的内存大小，生产时可以设置32G\n-e ES_JAVA_OPTS="-Xms512m -Xmx1024m" \\\n# 允许非本机ip通信\n-e http.host=0.0.0.0 \\\n# 关闭ssl\n-e xpack.security.enabled=false \\\n-v /program/elasticsearch/plugins:/usr/share/elasticsearch/plugins \\\n-d elasticsearch:8.4.3\n# 学习使用就不用挂载配置文件了\n# -v /home/elasticsearch/config/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml \\\n# -v /home/elasticsearch/data:/usr/share/elasticsearch/data \\\n\n如果添加selinux规则，将要挂载的目录添加到白名单\nchmod -R 777 /mydata/elasticsearch/data\nchmod -R 777 /mydata/elasticsearch/config\nchmod -R 777 /mydata/elasticsearch/plugins\n\n# 设置开机启动elasticsearch\ndocker update elasticsearch --restart=always\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])]),a("h3",{attrs:{id:"_2-ik分词器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-ik分词器"}},[s._v("#")]),s._v(" 2.ik分词器")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("注意:最好plugins下新建一个ik文件夹,将压缩包在ik里面解压,如果全部解压到plugins里,可能无法识别\ncd /mydata/elasticsearch/plugins/ik\nwget https://github.com/medcl/elasticsearch-analysis-ik/releases/download/v7.4.2/elasticsearch-analysis-ik-7.4.2.zip\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("#检查\n#进入容器内部\ndocker exec -it ceda /bin/bash\n#查看是否存在ik文件夹\ncd plugins/\n#查看插件列表有没有ik\ncd ../\ncd bin/\nelasticsearch-plugin list\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('测试\nPOST _analyze\n{\n\t"analyzer": "ik_smart",\n\t"text":"我是中国人"\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('#创建自定义词\n#创建目录\n在nginx的html目录下床建es/fenci.txt\n#修改ik分词器配置\ncd mydata/elasticsearch/plugins/ik/config/\nvi IKAnalyzer.cfg.xml\n*********************************************************************\n打开下面的注释.并且编辑自定义词文件的位置\n\x3c!--用户可以在这里配置远程扩展字典 --\x3e\n<entry key="remote_ext_dict">http://192.168.31.103/es/fenci.txt</entry> \n*********************************************************************\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h3",{attrs:{id:"_3-安装kibana"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-安装kibana"}},[s._v("#")]),s._v(" 3.安装kibana")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker run --name kibana -e ELASTICSEARCH_HOSTS=http://192.168.31.103:9200 -p 5601:5601 -d kibana:7.4.2\n\n# 设置开机启动kibana\ndocker update kibana  --restart=always\n# kibana图形界面http://192.168.31.103:5601\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"_6-reveal-md"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-reveal-md"}},[s._v("#")]),s._v(" 6.reveal-md")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("开启服务,同时开启文件监听动态更新(监听会导致卡顿)\ndocker run -p 1948:1948 -p 35729:35729 -v /mydata/reveal-md:/slides -d webpronl/reveal-md:5.3.2 /slides --watch\n不开启监听依旧会更新文件\ndocker run -p 1948:1948 -v /mydata/reveal-md:/slides -d webpronl/reveal-md:5.3.2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"_7-nacos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-nacos"}},[s._v("#")]),s._v(" 7.nacos")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker run --env MODE=standalone --name nacos -d -p 8848:8848 -p 9848:9848 -p 9849:9849 nacos/nacos-server\n默认占用内存较高，服务器内存较小的话需要调整内存\ndocker run -e JVM_XMS=256m -e JVM_XMX=256m -e JVM_XMN=128m -e JVM_MS=64m --env MODE=standalone --name nacos -d -p 8848:8848 -p 9848:9848 -p 9849:9849 nacos/nacos-server\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"_8-rabbitmq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-rabbitmq"}},[s._v("#")]),s._v(" 8.rabbitmq")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker run -d --name rabbitmq -p 5672:5672 -p 15672:15672 -v /mydata/rabbitmq:/var/lib/rabbitmq rabbitmq:3.9.14-management-alpine\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);