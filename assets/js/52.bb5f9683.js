(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{510:function(s,a,e){"use strict";e.r(a);var t=e(0),h=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_1-介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-介绍"}},[s._v("#")]),s._v(" 1.介绍")]),s._v(" "),a("p",[s._v("上一篇讲解scan时提到了rehash，这里就来详细说说。\n由于redis底层实现为hash表，为了避免频繁的hash碰撞，提升查询效率，当hashtable内数据量达到一定程度时，就需要rehash扩展hashtable。\n一般来说，负载因子为1时就会触发rehash，除非在执行持久化命令时可以容忍到5。")]),s._v(" "),a("blockquote",[a("p",[s._v("负载因子 = 哈希表已保存的节点数量/哈希表大小")])]),s._v(" "),a("p",[s._v("redis中的rehash是渐进执行的，每处理一次请求就进行一次单个桶（hashtable单个索引和挂载链表合称为桶）的rehash操作，将rehash的时间成本均摊到每次请求上。")]),s._v(" "),a("h2",{attrs:{id:"_2-流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-流程"}},[s._v("#")]),s._v(" 2.流程")]),s._v(" "),a("p",[s._v("redis内有两个hashtable，其中一个就是在需要rehash时创建，存放rehash临时数据，等到流程结束后销毁。")]),s._v(" "),a("blockquote",[a("p",[s._v("网络上redis存储结构的图很多")])]),s._v(" "),a("p",[s._v("所以大致流程如下：hashtable分配内存 -> 重新计算桶内hash -> 转移指针 -> 多次rehash -> hashtable回收内存。")]),s._v(" "),a("p",[s._v("扩容前==> 0 -> 1 -> 2 -> 3\n扩容后==> 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7")]),s._v(" "),a("p",[s._v("0 ==> 0 + 4\n1 ==> 1 + 5\n2 ==> 2 + 6\n3 ==> 3 + 7")]),s._v(" "),a("h2",{attrs:{id:"_3-rehash过程中的新增与查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-rehash过程中的新增与查询"}},[s._v("#")]),s._v(" 3.rehash过程中的新增与查询")]),s._v(" "),a("p",[s._v("在rehash过程中，redis会保留两个hashtable，但并不需要我们查询时检查当前桶是否已经完成rehash。\nredis维护了rehashidx参数，可以用来在计算hash值取模后通过对比rehashidx直接找到正确的hashtable。")]),s._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("typedef struct dict{\n  dictType *type; //类型特定函数\n  void *privdata; //私有数据\n  dictht ht[2]; //哈希表数组，类型为dictht，ht[0]为实际存储数据使用，ht[1] 为rehash时使用\n  int rehashidx; //rehash进度标志，-1 代表当前不在 rehash\n} dict\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])])}),[],!1,null,null,null);a.default=h.exports}}]);