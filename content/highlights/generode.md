---
title: GenErode pipeline can compare patterns of genomic erosion using genomic data from historical, ancient and modern samples
date: 2022-10-13
summary: The GenErode pipeline is the first bioinformatics pipeline that can process and analyse ancient, historical, and modern sequencing data from the same species with the aim of generating comparable estimates of genomic erosion indices.
banner: /highlights/GenErode.png
banner_large: /highlights/GenErode.png
banner_caption: "Image courtesy of David Díez-del-Molino."
tags: [Highlight, GenErode, Genomic Erosion, Bioinformatics, Conservation]
authors: [Katarina Öjefors Stark]
images: ["/highlights/GenErode.png"]
---

In recent centuries, many populations of wild animal species have been in severe decline due to human activities. This has led to reduced genetic diversity, increased inbreeding, and the accumulation of harmful mutations in these species. These so-called ‘genomic erosion’ processes increase the risk of species extinction. Multiple large-scale sequencing efforts have been initiated to generate reference genomes for all eukaryotic species. This will make genomics projects on endangered species more and more common. However, to date, genomic data has only had a very limited impact on the conservation of endangered species. There are several reasons for this, but two of the most important are (a) that the lack of standardised measures for genomic erosion has led to biases, and (b) that results need to be validated with empirical data.

Genomic erosion indices are only weakly correlated with current population sizes, which makes it difficult to identify genomic erosion in endangered species. Researchers would need to compare data from historical or ancient samples from before the decline (e.g. from museum collections) with data from modern, present-day samples to directly quantify the genomic consequences of the decline. Another challenge is to make data analyses reproducible and thereby comparable. Finally, not all conservation practitioners and researchers have the bioinformatics and programming skills needed to analyse large-scale genomic datasets.

In a recent publication in *BMC Bioinformatics*, Kutschera, Kierczak, van der Valk, and colleagues from SciLifeLab, Uppsala University, Stockholm University, the Swedish Museum of Natural History, and the Centre for Palaeogenetics presented the **GenErode** pipeline. It is a highly flexible, scalable, and modular bioinformatics pipeline that can compare patterns of genomic erosion using genomic data from samples from different time periods.

>"What is so special about the **GenErode** pipeline is that it can process and analyse whole-genome re-sequencing data from ancient, historical and modern samples at the same time”, says first author [Verena Kutschera](https://nbis.se/about/staff/verena-kutschera/) from [NBIS](https://nbis.se). “This makes it possible to estimate genomic erosion over time.”.

In brief, **GenErode** maps sequencing data to a reference genome assembly. It then performs variant calling and runs different downstream analyses to estimate a number of genomic erosion indices. The data is processed according to the characteristics of each data type (ancient/historical, modern). Quality checks and filtering are performed in all data processing steps, and a report with run settings and results is produced for each pipeline run. The pipeline can also run optional steps, such as subsampling a proportion of reads to achieve a similar average depth across samples, or assessing the presence of non-endogenous reads in the data by mapping historical/ancient data to mitochondrial genomes from different species.

Whilst the pipeline has been optimised for the analysis of re-sequencing data from vertebrates, it can instead be used for other organisms, such as haploid insects. The minimum sample size for GenErode is one ancient/historical and one modern sample, but it can easily be scaled up to dozens of samples. Until now, bioinformatics expertise has been a bottleneck in the conservation community. However, the proposed pipeline is user-friendly, no programming knowledge is required to run the pipeline, and all bioinformatics steps are well documented (making it accessible for users).

To test the **GenErode** pipeline and verify it as a useful tool, the researchers used a test dataset from the Sumatran rhinoceros. This dataset contains a small proportion of whole genome re-sequencing data from three historical and three modern Sumatran rhinoceros samples. The original results based on the entire, genome-wide dataset can be found in a separate article (see [von Seth et al., 2021](https://doi.org/10.1038/s41467-021-22386-8) from the [Love Dalén group](https://www.su.se/nyheter/love-dal%C3%A9n-ny-professor-vid-zoologiska-institutionen-1.609473)).

In summary, while other pipelines are able to process and genotype ancient DNA data, **GenErode** is the first bioinformatics pipeline that can process and analyse ancient, historical, and modern sequencing data from the same species with the aim of generating comparable estimates of genomic erosion indices. One of the main advantages of **GenErode** is its flexibility, as the researchers propose that the pipeline can be used for sequencing data from different species groups. Results created with **GenErode** are easily reproducible and the pipeline is in an accessible format.

>“We hope that our pipeline helps to close the gap between evolutionary research on endangered species and applications in their conservation. It was important to us to make **GenErode** easy to run for people from different backgrounds, not only bioinformaticians”, says Verena Kutschera.

Those interested are invited to read more about the [Love Dalén group](https://www.su.se/nyheter/love-dal%C3%A9n-ny-professor-vid-zoologiska-institutionen-1.609473) and the [Centre for Palaeogenetics](http://palaeogenetics.com/).

This work involves multiple researchers affiliated with SciLifeLab, including a DDLS fellow: [Tom van der Valk](https://www.scilifelab.se/news/new-ddls-fellow-tom-van-der-valk/).

#### Data, code, and program

The **GenErode** pipeline was written in Snakemake and Python3. It uses Conda and Singularity containers to achieve reproducibility on high-performance compute clusters. It is possible to run the pipeline on Linux systems, such as high-performance computing (HPC) clusters.

* In adherence with Open Science, the researchers have made the source code freely available on [GitHub](https://github.com/NBISweden/GenErode).
* The Sumatran rhinoceros test dataset is available in the [Scilifelab Data Repository](https://doi.org/10.17044/scilifelab.19248172), and it can be used to test the GenErode pipeline.

#### Article

Kutschera, V. E., Kierczak, M., van der Valk, T., von Seth, J., Dussex, N., Lord, E., Dehasque, M., Stanton, D. W. G., Emami Khoonsari, P., Nystedt, B., Dalén, L., Díez-del-Molino, D. (2022) GenErode: a bioinformatics pipeline to investigate genome erosion in endangered and extinct species. *BMC Bioinformatics 23*, 228. [10.1038/s41467-022-28865-w](https://doi.org/10.1186/s12859-022-04757-0)

#### Funding

The project was funded by Carl Tryggers, European Union’s Horizon 2020 research and innovation programme under the Marie Skłodowska-Curie grant agreement, the Swedish Research Council (2017-04647) and FORMAS (2015-676), the Swiss National Science Foundation, and the Knut and Alice Wallenberg Foundation as part of the National Bioinformatics Infrastructure Sweden at SciLifeLab.
