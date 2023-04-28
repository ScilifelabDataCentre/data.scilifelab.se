---
title: Accessing compute resources (e-infrastructure)
toc: true
---

## Compute resources available for researchers in Sweden 

Compute resources (otherwise known as e-infrastructure, or e-infra) are defined as resources that can be used for simulation, analysis, support, hosting, and storage. Different compute resources are intended for different purposes. For example, some resources are intended for performing simulation (users apply for 'compute time' to use the resource), whilst others are intended mostly for hosting.

This page is intended as a guide for researchers based in Sweden on the compute resources available to them, the services the resources provide, and how to apply for access to them. If you are aware of available resources that are not listed here, please [get in touch](/contact/).

### Resources at your University

Universities often have their own compute resources that they will make available for use by their own researchers. This may be the easiest way for you to obtain access to compute resources. Please contact the university IT department to learn what they can offer and how to access the compute resources.

### National Academic Infrastructure for Supercomputing in Sweden (NAISS)

[NAISS](https://www.naiss.se/) (successor to Swedish National Infrastructure for Computing, SNIC) provides resources primarily for simulation and analysis. The resources can be broadly divided into two types; (1) those intended for general high performance compute (HPC) applications, and (2) those designed to handle sensitive data.

Different NAISS resources are likely to be of interest for different fields or types of application. For example, *NAISS SENS* and *Rackham*, which have rich program stacks oriented towards life sciences, are likely to be of particular interest for bioinformatics. The difference between these two systems is that NAIS SENS is designed to handle sentive data (e.g. human genetic data), whilst Rackham is not. By contrast, those with workloads similar to those associated with traditional HPC, particularly those able to benefit from AMD GPUs, should instead consider making use of *Dardel*.

NAISS also provides a cloud system (*the Swedish Science Cloud*), as well as a GPU cluster (*Alvis*), which is dedicated to projects based on artificial intelligence (AI) or machine learning (ML). Both the *Swedish Science Cloud* and *Alvis* are equipped with NVIDIA GPUs.

Finally, NAISS also has *Tetralith*, which is a general computational resource with NVIDIA T4 GPUs in addition to a large CPU partition.

Applications to use the NAISS resources listed here should be submitted through the SUPR Portal. Please see our section on [applying for resources via SUPR](#applying-for-resources-via-the-supr-portal) below for information on how to apply.

### Berzelius

[Berzelius](https://nsc.liu.se/systems/berzelius/) is a GPU-rich NVIDIA DGX system based at the National Supercomputer Centre at Linköping University (NSC-LiU). It is primarily intended for simulation and analysis, and is financed by the Wallenberg AI, Autonomous Systems and Software Program. Berzelius is primarily intended for AI/ML research but is also open for applications from other sorts of projects.

Applications to use Berzelius should be submitted through the SUPR Portal. Please see our section on [applying for resources via SUPR](#applying-for-resources-via-the-supr-portal) below for information on how to apply.

### LUMI 

[LUMI](https://www.lumi-supercomputer.eu/) is a EuroHPC resource partially dedicated to Swedish researchers. LUMI is similar to *Dardel* (provided by [NAISS](#national-academic-infrastructure-for-supercomputing-in-sweden-naiss), see above), though LUMI is larger overall. If you need to share data with researchers in other countries cooperating in LUMI, it is a good choice.

Applications to use the portion of LUMI allocated to Sweden should be submitted via the SUPR Portal. Please see our section on [applying for resources via SUPR](#applying-for-resources-via-the-supr-portal) below for information on how to apply for the portion of resources intended for researchers based in Sweden.

Whilst portions of LUMI are allocated for specific countries, [as with other EuroHPC resources](#eurohpc) (see below), there is also a portion allocated for use by researchers in Europe in general. We encourage researchers to apply to use this portion too, and applications can be made via the [European PRACE Portal](https://prace-ri.eu/hpc-access/eurohpc-access/)).

### AIDA Data Hub 

[AIDA](https://datahub.aida.scilifelab.se/services/) is a DGX-based visualisation support system. It is the premier resource for processing medical imaging data where it is necessary to ensure that the needs related to the handling of sensitive data are met.

It is possible to apply to use AIDA by sending an email query to [aida@nbis.se](mailto:aida@nbis.se).

### EuroHPC

[EuroHPC](https://eurohpc-ju.europa.eu/index_en) provides multiple compute resources across Europe (e.g. [LUMI](#lumi), described above). Researchers based in Sweden are eligible to apply to use these resources, and their applications will be considered in competition from researchers based in the rest of Europe. As of early 2023, it remains relatively easy to secure compute time at EuroHPC resources due to overcapacity.

As described with [LUMI above](#lumi), portions of EuroHPC resources are allocated for specfic countries, but portions are just allocated for use by researchers in Europe, regardless of the specific country. We encourage researchers to make use of this. Applications can be made via the [European PRACE Portal](https://prace-ri.eu/hpc-access/eurohpc-access/)).

### SciLifeLab Data Platform

Scilifelab provides e-infrastructure services complementing those available from national e-infrastructures, and with a focus on resources for FAIR data sharing. This includes compute- and storage resources for hosted services adhering to principles of FAIR and Open Science

Applications are welcomed from individual researchers, research groups, and organisations. To learn more about the SciLifeLab Data Platform, and to apply, please see our [hosting page](/services/hosting/).

### Resources aimed at data support

Some compute resources, such as the Swedish National Data Service (SND) and InfraVis, are focused on providing support, rather than e.g. compute time for analysis.

[SND](https://snd.gu.se/sv) is a collaboration involving almost 40 academic institutions and public research institutes. It provides researchers with a coordinated and quality-assured system for finding, describing, and sharing research data.

[InfraVis](https://infravis.se) helps users to visualise research data from any scientific domain and provides access to state-of-the-art visualisation competence, support, equipment, training, and methods.

## Applying for resources via the SUPR Portal

The [Swedish User and Project Repository (SUPR) Portal](https://supr.naiss.se/) can be used to apply for compute time at multiple compute resources, including those at NAISS, Berzelius, and LUMI (all described above).

After going to the portal, the first step is to register as a new user by selecting 'Register New Person' (see below).

<figure class="my-3 figure w-100 text-center">
  <img src="/img/misc/SUPR_login.png" class="figure-img img-fluid w-75 d-none d-xl-inline">
  <img src="/img/misc/SUPR_login.png" class="figure-img img-fluid w-100 d-xl-none">
  <figcaption class="figure-caption">A screenshot fron the SUPR login page.</figcaption>
</figure>

After registering, you have to apply for a project. To do this, select 'Rounds', then 'Compute Rounds', and then choose an the option most applicable to you e.g. 'NAISS Small Compute'. Most projects in the life sciences field use Rackham as compute resource, and so we recommend it. However, other compute resources may be more suitable for your use. If your data include sensitive data (e.g. human genetic data), your choice of compute resource must cater for such data, e.g. 'NAISS SENS', which includes the compute resource Bianca.

Your application will then be evaluated. Smaller projects are evaluated on a technical basis, whilst larger projects also include a scientific evaluation.

When you application for resources is approved, you will need to apply for a user account on the compute resource to which your project has been assigned.

<figure class="my-3 figure w-100 text-center">
  <img src="/img/misc/NAISS_workflow.png" class="figure-img img-fluid w-75 d-none d-xl-inline">
  <img src="/img/misc/NAISS_workflow.png" class="figure-img img-fluid w-100 d-xl-none">
  <figcaption class="figure-caption">A summary of the workflow on the SUPR Portal, courtesy of NAISS.</figcaption>
</figure>

For further information please refer to the [NAISS instruction pages](https://www.naiss.se).
