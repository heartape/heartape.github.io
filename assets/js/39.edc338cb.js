(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{498:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"_1-查询ip"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-查询ip"}},[s._v("#")]),s._v(" 1.查询ip")]),s._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("[root@localhost ~]# ip addr\n1: lo: &lt;LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000\n    (下面省略)\n2: ens33: &lt;BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000\n    (下面省略)\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("其中ens开头的就是下面需要编辑的网卡")]),s._v(" "),t("h2",{attrs:{id:"_2-编辑配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-编辑配置"}},[s._v("#")]),s._v(" 2.编辑配置")]),s._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("[root@localhost ~]# vi /etc/sysconfig/network-scripts/ifcfg-ens33\n// 需要修改的配置\nBOOTPROTO=static\nONBOOT=yes\n// 需要添加的配置\nIPADDR=192.168.31.103\nNETMASK=255.255.255.0\nGATEWAY=192.168.31.1\nDNS1=119.29.29.29\nDNS2=8.8.8.8\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h2",{attrs:{id:"_3-重启"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-重启"}},[s._v("#")]),s._v(" 3.重启")]),s._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("[root@localhost ~]# systemctl restart network\n[root@localhost ~]# cat /etc/sysconfig/network-scripts/ifcfg-ens33\n// 因为路由器性能问题可能要等一会儿\n[root@localhost ~]# ping www.baidu.com\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);