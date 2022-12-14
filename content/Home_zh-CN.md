import { HomeImages } from 'src/components/Home/HomeImages'
import { Link } from 'src/components/Link/Link'
import { LinkExternal } from 'src/components/Link/LinkExternal'
import { NameTable } from 'src/components/Common/NameTable'
import { CladeSchema } from 'src/components/Variants/CladeSchema.tsx'

**点击其中一个Variant按钮，开始探索！**

CoVariants是对SARS-CoV-2病毒变种和变异的总览。在这里，你可以了解到一个病毒变种由哪些变异构成。这些变异有什么影响 (我们会提供相关的论文和资源的链接)？这些变种是在哪里发现的？以及查看病毒变种的Nextstrain构建！

点击其中一种颜色的按钮来查看某种特定的[病毒变种](/variants) - 阅读相关信息、查看图表和蛋白质结构、链接到某个Nextstrain构建。
如果一次想看多个病毒变种，请查看[按病毒变种](/per-variant)和[按国家](/per-country)页面，你可以在同一个页面看到很多数据，并且对变种和国家进行比较！

<HomeImages/>

**这些名字的意思是什么?**
CoVariants网站使用Nextstrain命名系统来命名病毒变种。([点击这里进一步阅读](https://nextstrain.org/blog/2021-01-06-updated-SARS-CoV-2-clade-naming/))。然而，由于存在多种命名系统，会让人觉得很困惑！下面的表格可以找到你感兴趣的名字。

<NameTable/>

<!-- The variants featured are currently slightly biased towards circulation in Europe: this is simply a reflection that the primary maintainer (Emma Hodcroft) works mostly with European data. We hope to add more variants from other regions soon! -->

这些变种和分支群(clade)是如何互相关联的？CoVariants是遵循Nextstrain分支群模式的，变种可以从其他变种的分支群繁衍。下面有一个图表，显示了Nextstrain分支群之间的整体关系。

<CladeSchema/>

这个项目是免费而且开源的。内容、导出的数据、生成数据的代码以及实现这个网站应用程序的代码都可以在Github上找到：[github.com/hodcroftlab/covariants](https://github.com/hodcroftlab/covariants/).

> **SARS-CoV-2疫情和周边研究还在继续** 我们在努力保持这个仓库尽可能最新，但读者仍然应该自己确认这些信息是不是最新的。

## 下一步是什么?

- 浏览 [病毒变种](/variants)
- 探索 [按国家分布](/per-country)
- 探索 [按病毒变种分布](/per-variant)
- 查看 [共享的突变](/shared-mutations)
- 阅读 [常见问题](/faq)
