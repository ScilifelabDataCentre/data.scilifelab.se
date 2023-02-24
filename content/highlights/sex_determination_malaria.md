---
title: Discovery of sex determination genes in a malaria parasite that are essential for mosquito transmission
date: 2023-02-24
summary: Russell *et al.* (2023) details the discovery of sex determination genes in the malaria parasite *Plasmodium berghei*, and how they are essential in transmission of malaria via mosquitoes. Data and code shared openly.
banner: /highlights/mosquito_transmission_small.jpeg
banner_large: /highlights/mosquito_transmission.jpeg
banner_caption: Small mitoribosomal subunit intermediates complexed with auxiliary factors, revealing a sequential mechanism of assembly (Credit; Verena Resch).
tags: [Highlight, Malaria, Plasmodium, Sex determination, Parasite transmission, Single cell analysis, Protozoa]
authors: [Katarina Öjefors Stark]
images: ["/highlights/mosquito_transmission_small.jpeg"]
---

Malaria is caused by protozoa in the *Plasmodium* genus, and is transmitted between humans via a vector; mosquitoes in the *Anopheles* genus. Malaria is endemic in parts of Asia, the Americas, and Africa. Throughout the last few decades, prevention strategies and antimalarial drugs have decreased the number of malaria cases. However, with the repeated evolution of drug resistance, and in the absence of effective vaccines, malaria remains a major health threat. The World Health Organization (WHO) estimated that there were 229 million new cases of malaria, resulting in 400,000 deaths, worldwide in 2019 alone. Common symptoms of malaria include fever, vomiting, tiredness, and headaches. In more severe cases, malaria can lead to jaundice and even death. Today, the majority of severe cases are found in Sub-Saharan Africa ([WHO, 2023](https://www.who.int/news-room/fact-sheets/detail/malaria)).

Of the over 100 Plasmodium species described to date, only five infect humans;  *Plasmodium falciparum*, *P. vivax*, *P. ovale*, *P. malariae*, and *P. knowesi*. Several species infecting rodents have also been identified, among them is *P. berghei*. *P. berghei* provides three advantages for experimental research: (1) its genes can relatively easily disrupted in large numbers to reveal their functions, (2) the parasites can be studied *in vivo*, and (3) it is easy to transmit these parasites safely to mosquitoes in the laboratory.

Understanding how malaria parasites are transmitted via mosquitoes is important because it can offer new strategies to prevent the spread of disease. To be able to infect mosquitoes, malaria parasites need to switch from asexual to sexual reproduction. Whilst it is known that a transcription factor (AP2-G) controls this switch, it is not clear how the same protein can control two very different programs of development to produce both female and male cells from an asexual precursor.

The question of how male and female sex is determined in *P. berghei* and how this affects the transmission of malaria is the subject of a recent publication in Cell Host and Microbe by researchers from Umeå University, along with colleagues from US, UK and Belgium (First authors: Andrew J.C. Russell, Theo Sanderson, Ellen Bushell and Arthur M Talman;  Corresponding authors: Andrew P Waters, and M.K.N Lawniczak, Sanger Institute; Oliver Billker, Umeå University, MIMS).

Russell and colleagues used a global screen of barcoded mutants in order to identify genes with importance for the development into male or female sexual forms. The researchers then validated whether these genes had importance for transmission.

In brief, the researchers used a genetically engineered *P. berghei* reporter line whose male and female cells produced differently coloured fluorescent proteins. They then used a large public collection of reagents, each designed to replace a different parasite gene with a molecular barcode that gets written into the sequence of the deleted gene. The researchers sorted the male and female cells into different groups by their colour and counted the barcodes in each sex on a DNA sequencer. Missing barcodes pointed to genes that were required to make cells of that sex. Having identified genes needed for each sex, they then used single cell RNA sequencing of thousands of mutated cells to work out how early in development each gene was required. This led them to a small number of genes that were needed at precisely the point when an individual parasite determines whether to become male or female. This small panel of genes includes a male-determining factor with a LOTUS/OST-HTH domain, which is also found in proteins that define the germline in developing animal embryos.

> “This study has been an exciting journey”, says Oliver Billker. “We had to draw on the skills of different teams to complete genome scale functional screens and understand the results. In the end it proved crucial that we decided to map single cell transcriptomes from many mutants onto a transcriptomic atlas of normal development to work out in which order the genes we had discovered act. The emerging parallels between developmental decisions in a divergent single-celled parasite and in animals is fascinating. We are now keen to work out the underpinning mechanisms and how we can use such knowledge to block malaria transmission.“

This study demonstrates how genome scale functional screens and single cell transcriptomics can now be combined to reveal the biology of a medically important yet highly divergent and poorly tractable eukaryote. The identification of key components for the male and female developmental programs in a malaria parasite not only provides starting points to get at the underlying mechanisms of developmental regulation but also puts a spotlight on the origin of sex itself.

#### Data

*	Single-cell RNA-seq data is found in the ENA under accession number [PRJEB44892](https://www.ebi.ac.uk/ena/browser/view/PRJEB44892)
*	Bulk RNA-seq data is found in Gene Expression Omnibus: [GSE110201](https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE110201), [GSE168817](https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE168817)
*	Mass spectrometry proteomics data have been deposited (via PRoteomics IDEntifications) to the ProteomeXchange Consortium: [PXD033827](http://proteomecentral.proteomexchange.org/cgi/GetDataset?ID=PXD033827)
*	Supporting files and code are available on [Github](https://github.com/andyrussell/Gametocytogenesis/)
*	Microscopy data and source data is available upon request to the lead contact ([Oliver Billker](mailto:oliver.billker@umu.se))

#### Article

Russell, A. J. C., Sanderson, T., Bushell, E., Talman, A. M., Anar, B., Girling, G., Hunziker, M., Ken, R. S., Martin, J. S., Metcalf, T., Montandon R., Pandey, V., Pardo, M., Roberts, A. B., Sayers, C., Schwach, F., Choudhary, J. S., Rayner, J. C., Voet, T., Modrzynska, K. K., Waters, A. P, Lawniczak, M. K. N., Billker, O. (2023). Regulators of male and female sexual development are critical for the transmission of a malaria parasite. *Cell Host & Microbe 31* 305-319.e10. [10.1016/j.chom.2022.12.011](https://doi.org/10.1016/j.chom.2022.12.011).

#### Funding

The work at Umeå University was funded by the Knut and Alice Wallenberg Foundation, the European Research Council and a Marie Sklodowska-Curie Action fellowship. Research at the Wellcome Sanger Institute was funded by the Wellcome Trust.

Learn more about the research behind this study: <https://billkerlab.org/>
