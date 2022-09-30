(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{507:function(t,s,a){"use strict";a.r(s);var n=a(0),_=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"_1-explain"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-explain"}},[t._v("#")]),t._v(" 1.explain")]),t._v(" "),s("p",[t._v("explain命令会获取select语句的执行计划，但没有真正执行，我们可以从中寻找sql优化的方向")]),t._v(" "),s("p",[t._v("执行计划主要有以下几个:")]),t._v(" "),s("ul",[s("li",[t._v("select_type: 查询的类型\n"),s("ul",[s("li",[t._v("simple: 简单查询")]),t._v(" "),s("li",[t._v("primary: 复杂查询中最外层的select")]),t._v(" "),s("li",[t._v("subquery: 包含不在from中的子查询")]),t._v(" "),s("li",[t._v("derived: 包含在from子句中的子查询。MySQL会将结果存放在一个临时表中，也称为派生表")]),t._v(" "),s("li",[t._v("union: union之后的select")]),t._v(" "),s("li",[t._v("union result: union结果的select")])])]),t._v(" "),s("li",[t._v("type: 关联类型，性能排行system > const > eq_ref > ref > fulltext > ref_or_null > index_merge > unique_subquery > index_subquery > range > index > ALL\n"),s("ul",[s("li",[t._v("NULL:mysql能够在优化阶段分解查询语句，在执行阶段用不着再访问表或索引。比如数据在索引中不需要回表。")]),t._v(" "),s("li",[t._v("const, system:主表唯一索引匹配")]),t._v(" "),s("li",[t._v("eq_ref:从表，唯一索引完全匹配")]),t._v(" "),s("li",[t._v("ref:从表，唯一索引不完全匹配或者使用普通索引")]),t._v(" "),s("li",[t._v("ref_or_null:从表，唯一索引不完全匹配或者使用普通索引，并且条件中包含null值判断(is null)")]),t._v(" "),s("li",[t._v("index_merge:优化时进行了索引合并")]),t._v(" "),s("li",[t._v("range: in(), between ,> ,<, >=, <> 等范围查询")]),t._v(" "),s("li",[t._v("index: 扫描整个索引树")]),t._v(" "),s("li",[t._v("ALL: 全表扫描(注意，数据较少会直接全表扫描，不会使用索引)")])])]),t._v(" "),s("li",[t._v("possible_keys:可能使用的索引")]),t._v(" "),s("li",[t._v("key:实际使用的索引")]),t._v(" "),s("li",[t._v("key_len:索引里使用的字节数，不同的类型所占据的字节数不同\n"),s("ul",[s("li",[t._v("char(n):n字符长度(utf-8编码下，每个字符3字节，定义的字段长度都是字符数)")]),t._v(" "),s("li",[t._v("varchar(n):1或2(长度大于255)字节存储字符串长度，则字节数为，实际字符数 * 3 + 1或2")]),t._v(" "),s("li",[t._v("tinyint:1字节")]),t._v(" "),s("li",[t._v("smallint:2字节")]),t._v(" "),s("li",[t._v("int:4字节")]),t._v(" "),s("li",[t._v("bigint:8字节")]),t._v(" "),s("li",[t._v("date:3字节")]),t._v(" "),s("li",[t._v("timestamp:4字节")]),t._v(" "),s("li",[t._v("datetime:8字节")])])])]),t._v(" "),s("h2",{attrs:{id:"_2-索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-索引"}},[t._v("#")]),t._v(" 2.索引")]),t._v(" "),s("p",[t._v("通过explain的内容可以看出，索引对于查询的性能至关重要，所以这部分说说索引。")]),t._v(" "),s("h3",{attrs:{id:"_1-b-tree"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-b-tree"}},[t._v("#")]),t._v(" 1.B+TREE")]),t._v(" "),s("p",[t._v("B+ TREE相比其他结构来说有非常大的优势")]),t._v(" "),s("ul",[s("li",[t._v("相比B TREE来说，因为数据都在叶子节点，查找相邻数据时可以通过左右指针来查找，而不用通过树结构往上回溯。")]),t._v(" "),s("li",[t._v("相比hash来说，不会存在hash冲突，所以更稳定，并且hash是散列的，不能支持排序和范围查询。")])]),t._v(" "),s("h3",{attrs:{id:"_2-innodb和myisam的索引区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-innodb和myisam的索引区别"}},[t._v("#")]),t._v(" 2.InnoDB和MyISAM的索引区别")]),t._v(" "),s("p",[t._v("MyISAM:")]),t._v(" "),s("ul",[s("li",[t._v("索引均为非聚簇索引，索引保存了指向数据的指针，数据与索引分离。")]),t._v(" "),s("li",[t._v("MyISAM不支持事务,原因就是因为数据与索引在两个文件无法做到一致性。")]),t._v(" "),s("li",[t._v("支持全文索引。\nInnoDB:")]),t._v(" "),s("li",[t._v("主键索引为聚簇索引，同时保存了所有数据（如果没有主键，系统会隐式地创建）。")]),t._v(" "),s("li",[t._v("二级索引为非聚簇索引，保存了主键值，用于到主键索引二次查询（即回表）。")])]),t._v(" "),s("h3",{attrs:{id:"_3-最左匹配原则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-最左匹配原则"}},[t._v("#")]),t._v(" 3.最左匹配原则")]),t._v(" "),s("p",[t._v("联合索引不会保存数据所以当使用索引时，会先拿到主键，再回表拿数据。但当需要查询的数据在索引中时，便可以利用最左匹配原则省去回表环节。比如："),s("br"),t._v("\n有一个a,b,c三个字段的联合索引，如果where条件中使用到了a=1,b=2,且查询对象时c时，就可以免去回表。"),s("br"),t._v("\n之所以叫最左匹配原则，是因为它严格要求索引的建立顺序必须条件在左，结果在右，这跟索引的数据结构有关。索引会把a和b字段建立成1对n的关系，所以无法逆向使用最左匹配原则。")]),t._v(" "),s("h3",{attrs:{id:"_4-性能调优"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-性能调优"}},[t._v("#")]),t._v(" 4.性能调优")]),t._v(" "),s("p",[t._v("1.鉴于mysql索引的排序机制，我们很容易得到第一点：主键。"),s("br"),t._v("\n一般来说，有序的主键性能更强。如果主键是十分散列的:")]),t._v(" "),s("ul",[s("li",[t._v("每次插入时都需要寻找插入的位置，效率低下。")]),t._v(" "),s("li",[t._v("由于需要排序，所以需要重新将数据向后移动，页满了以后会进行大量的页分裂操作，需要进行多次io。")]),t._v(" "),s("li",[t._v("由于频繁的页分裂，造成内存碎片化，分配的内存不能充分使用，后续查找数据也跟困难。")])]),t._v(" "),s("p",[t._v("2.充分利用最左匹配原则，减少索引的数量")]),t._v(" "),s("p",[t._v("3.只建立必要的索引，索引需要大量存储空间，并且在插入删除时需要维护索引，影响性能。")]),t._v(" "),s("h2",{attrs:{id:"_3-json数据类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-json数据类型"}},[t._v("#")]),t._v(" 3.json数据类型")]),t._v(" "),s("blockquote",[s("p",[t._v("低版本不支持json类型，某些函数需要更高的版本")])]),t._v(" "),s("h3",{attrs:{id:"_1-定义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-定义"}},[t._v("#")]),t._v(" 1.定义")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[t._v("JSON_OBJECT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nJSON_ARRAY"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value1 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value2 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 将多个json对象聚合成一个对象")]),t._v("\nJSON_MERGE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("JSON_OBJECT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key1 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("JSON_OBJECT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key2 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h3",{attrs:{id:"_2-where"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-where"}},[t._v("#")]),t._v(" 2.where")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- `attributes`下的ports下的mysql的值作为条件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" JSON_EXTRACT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("attributes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$.ports.mysql'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3306")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 简写")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("attributes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$.ports.mysql'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3306")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 模糊匹配,[*]代表任意数组下标,.*代表任意属性")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("attributes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$[*].*'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3306")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("h3",{attrs:{id:"_3-insert-update"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-insert-update"}},[t._v("#")]),t._v(" 3.insert,update")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UPDATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("article"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SET")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("author"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" JSON_INSERT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("author"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$.name'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'heartape'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("article_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("710848206937784320")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("JSON_OBJECT各种函数的不同:")]),t._v(" "),s("ul",[s("li",[t._v("JSON_INSERT 函数只有当属性不存在的时候,它才会将这个属性添加到对象中;")]),t._v(" "),s("li",[t._v("JSON_REPLACE 函数只有在对象中找到该属性才会替换该属性;")]),t._v(" "),s("li",[t._v("JSON_SET 函数,如果在对象中没有找到这个属性,就会添加这个属性到对象中,如果对象中有这个属性了,就会替换掉原来的属性.")])]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UPDATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("article"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SET")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("label_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" JSON_ARRAY_APPEND"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("label_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" article_id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("710848206937784320")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UPDATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("article"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SET")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("label_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" JSON_ARRAY_INSERT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("label_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$[1]'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" article_id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("710848206937784320")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UPDATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("article_test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SET")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("label_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" JSON_REPLACE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("label_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$[1]'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" article_id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("710848206937784320")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("JSON_ARRAY各种函数的不同:")]),t._v(" "),s("ul",[s("li",[t._v("JSON_ARRAY_APPEND:在末尾添加。")]),t._v(" "),s("li",[t._v("JSON_ARRAY_INSERT:在指定位置添加，当前位置以及后面的元素后移。")]),t._v(" "),s("li",[t._v("JSON_REPLACE:在指定位置更新。")])]),t._v(" "),s("h3",{attrs:{id:"_4-delete"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-delete"}},[t._v("#")]),t._v(" 4.delete")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UPDATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("article"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SET")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("author"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" JSON_REMOVE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("author"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$.name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" article_id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("710848206937784320")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UPDATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("article"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SET")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("label_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" JSON_REMOVE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("label_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$[1]'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" article_id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("710848206937784320")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("h2",{attrs:{id:"_4-常用函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-常用函数"}},[t._v("#")]),t._v(" 4.常用函数")]),t._v(" "),s("h3",{attrs:{id:"_1-数学函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-数学函数"}},[t._v("#")]),t._v(" 1.数学函数")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("函数")]),t._v(" "),s("th",[t._v("作用")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("ABS(X)")]),t._v(" "),s("td",[t._v("求绝对值")]),t._v(" "),s("td",[t._v("ABS(-3.14)=3.14")])]),t._v(" "),s("tr",[s("td",[t._v("SQR(X)")]),t._v(" "),s("td",[t._v("求算数平方根")]),t._v(" "),s("td",[t._v("SQRT(9)=3")])]),t._v(" "),s("tr",[s("td",[t._v("MOD(N,M)")]),t._v(" "),s("td",[t._v("求余数")]),t._v(" "),s("td",[t._v("MOD(9,5)=4")])]),t._v(" "),s("tr",[s("td",[t._v("CEIL(X)")]),t._v(" "),s("td",[t._v("即向上取整")]),t._v(" "),s("td",[t._v("CEIL(6.2)=7")])]),t._v(" "),s("tr",[s("td",[t._v("FLOOR(X)")]),t._v(" "),s("td",[t._v("向下取整，返回值转化为一个BIGINT")]),t._v(" "),s("td",[t._v("FLOOR(3.6)=3")])]),t._v(" "),s("tr",[s("td",[t._v("RAND()")]),t._v(" "),s("td",[t._v("生成一个0~1之间的随机数")]),t._v(" "),s("td",[t._v("RAND()=0.4684512908276648")])]),t._v(" "),s("tr",[s("td",[t._v("RAND(X)")]),t._v(" "),s("td",[t._v("X一样的话结果就一样")]),t._v(" "),s("td",[t._v("RAND(1)=0.40540353712197724")])]),t._v(" "),s("tr",[s("td",[t._v("ROUND(X)")]),t._v(" "),s("td",[t._v("四舍五入")]),t._v(" "),s("td",[t._v("ROUND(3.556)=3.5")])]),t._v(" "),s("tr",[s("td",[t._v("ROUND(X,D)")]),t._v(" "),s("td",[t._v("四舍五入，保留D位小数")]),t._v(" "),s("td",[t._v("ROUND(3.556,2)=3.56")])]),t._v(" "),s("tr",[s("td",[t._v("SIGN(X)")]),t._v(" "),s("td",[t._v("返回参数的符号")]),t._v(" "),s("td",[t._v("SIGN(0)=0;SIGN(3)=1;SIGN(-3)=-1")])]),t._v(" "),s("tr",[s("td",[t._v("POW(X,Y)")]),t._v(" "),s("td",[t._v("X的Y次方")]),t._v(" "),s("td",[t._v("POW(2,3)=8")])]),t._v(" "),s("tr",[s("td",[t._v("POWER(X,Y)")]),t._v(" "),s("td",[t._v("X的Y次方")]),t._v(" "),s("td",[t._v("POWER(2,3)=8")])])])]),t._v(" "),s("h3",{attrs:{id:"_2-字符串函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-字符串函数"}},[t._v("#")]),t._v(" 2.字符串函数")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("函数")]),t._v(" "),s("th",[t._v("作用")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("LENGTH(str)")]),t._v(" "),s("td",[t._v("字符串字节数")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("CONCAT(str1,str2,…)")]),t._v(" "),s("td",[t._v("合并字符串")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("INSERT(str,start,length,newStr)")]),t._v(" "),s("td",[t._v("将str中指定start位置开始length长度的内容替换为newStr")]),t._v(" "),s("td",[t._v("INSERT('123456',2,4,'000')='10006'")])]),t._v(" "),s("tr",[s("td",[t._v("LOWER(str)")]),t._v(" "),s("td",[t._v("将字符串中的字母转换为小写")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("UPPER(str)")]),t._v(" "),s("td",[t._v("将字符串中的字母转换为大写")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("LEFT(str,len)")]),t._v(" "),s("td",[t._v("从左侧字截取字符串，返回字符串左边的len个字符")]),t._v(" "),s("td",[t._v("LEFT(‘123456’,2)=‘12’")])]),t._v(" "),s("tr",[s("td",[t._v("RIGHT(str,len)")]),t._v(" "),s("td",[t._v("从右侧字截取字符串，返回字符串右边的len个字符")]),t._v(" "),s("td",[t._v("RIGHT(‘123456’,2)=‘56’")])]),t._v(" "),s("tr",[s("td",[t._v("TRIM(str)")]),t._v(" "),s("td",[t._v("删除字符串左右两侧的空格")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("REPLACE(str,s1,s2)")]),t._v(" "),s("td",[t._v("字符串替换，s2替换s1")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("SUBSTRING(str,start,length)")]),t._v(" "),s("td",[t._v("截取字符串")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("REVERSE(str)")]),t._v(" "),s("td",[t._v("字符串反转(逆序)")]),t._v(" "),s("td",[t._v("REVERSE(‘123456789’)：‘987654321’")])])])]),t._v(" "),s("h3",{attrs:{id:"_3-日期和时间函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-日期和时间函数"}},[t._v("#")]),t._v(" 3.日期和时间函数")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("函数")]),t._v(" "),s("th",[t._v("作用")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("CURDATE() 和 CURRENT_DATE")]),t._v(" "),s("td",[t._v("当前系统的日期")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("CURTIME() 和 CURRENT_TIME")]),t._v(" "),s("td",[t._v("当前系统的时间")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("NOW() 和 SYSDATE()")]),t._v(" "),s("td",[t._v("当前系统的日期和时间")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("UNIX_TIMESTAMP()")]),t._v(" "),s("td",[t._v("UNIX时间戳函数")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("FROM_UNIXTIME(X)")]),t._v(" "),s("td",[t._v("将UNIX时间戳转换为时间格式，与UNIX_TIMESTAMP()互为反函数")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("MONTH(date)")]),t._v(" "),s("td",[t._v("日期中的月份")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("MONTHNAME(date)")]),t._v(" "),s("td",[t._v("日期中的月份英文名称")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("DAYNAME(date)")]),t._v(" "),s("td",[t._v("曰期对应的星期几的英文名称")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("DAYOFWEEK(date)")]),t._v(" "),s("td",[t._v("日期对应的一周的索引位置值")]),t._v(" "),s("td",[t._v("WEEKDAY('2022-03-16') = 4")])]),t._v(" "),s("tr",[s("td",[t._v("WEEKDAY(date)")]),t._v(" "),s("td",[t._v("日期在一周内的对应的工作日索引")]),t._v(" "),s("td",[t._v("WEEKDAY('2022-03-16') = 2")])]),t._v(" "),s("tr",[s("td",[t._v("WEEK(date)")]),t._v(" "),s("td",[t._v("日期是一年中的第几周")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("DAYOFYEAR(date)")]),t._v(" "),s("td",[t._v("曰期是一年中的第几天")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("DAYOFMONTH(date)")]),t._v(" "),s("td",[t._v("日期是一个月中是第几天")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("YEAR(date)")]),t._v(" "),s("td",[t._v("年份")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("TIME_TO_SEC(time)")]),t._v(" "),s("td",[t._v("将时间参数转换为秒数")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("SEC_TO_TIME(seconds)")]),t._v(" "),s("td",[t._v("将秒数转换为时间，与TIME_TO_SEC互为反函数")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("DATE_ADD(date, INTERVAL)")]),t._v(" "),s("td",[t._v("向日期添加指定的时间间隔")]),t._v(" "),s("td",[t._v("DATE_ADD('2022-03-16',INTERVAL 1 day) = 2022-03-17")])]),t._v(" "),s("tr",[s("td",[t._v("ADDDATE(date, INTERVAL)")]),t._v(" "),s("td",[t._v("向日期添加指定的时间间隔")]),t._v(" "),s("td",[t._v("ADDDATE('2022-03-16',1) = 2022-03-17")])]),t._v(" "),s("tr",[s("td",[t._v("DATE_SUB(date, INTERVAL)")]),t._v(" "),s("td",[t._v("向日期减去指定的时间间隔")]),t._v(" "),s("td",[t._v("DATE_SUB('2022-03-16',INTERVAL 1 day) = 2022-03-15")])]),t._v(" "),s("tr",[s("td",[t._v("SUBDATE(date, INTERVAL)")]),t._v(" "),s("td",[t._v("向日期减去指定的时间间隔")]),t._v(" "),s("td",[t._v("SUBDATE('2022-03-16',1) = 2022-03-15")])]),t._v(" "),s("tr",[s("td",[t._v("ADDTIME(time,INTERVAL)")]),t._v(" "),s("td",[t._v("时间加法运算")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("SUBTIME(time,INTERVAL)")]),t._v(" "),s("td",[t._v("时间减法运算")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("DATEDIFF(date1,date2)")]),t._v(" "),s("td",[t._v("两个日期之间间隔")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("DATE_FORMAT(date,format)")]),t._v(" "),s("td",[t._v("格式化指定的日期")]),t._v(" "),s("td")])])]),t._v(" "),s("h3",{attrs:{id:"_4-流程控制函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-流程控制函数"}},[t._v("#")]),t._v(" 4.流程控制函数")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("函数")]),t._v(" "),s("th",[t._v("作用")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("IF(expr,v1,v2)")]),t._v(" "),s("td",[t._v("expr为真是返回v1，否则返回v2。")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("IFNULL(v1,v2)")]),t._v(" "),s("td",[t._v("如果v1不为NULL，则返回v1,否则返回v2。")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("CASE")]),t._v(" "),s("td",[t._v("搜索语句")]),t._v(" "),s("td",[t._v("sum(case when role = 'admin' then 1 else 0 end)")])])])])])}),[],!1,null,null,null);s.default=_.exports}}]);