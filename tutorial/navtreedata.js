var NAVTREE =
[
  [ "Cambridge SMT System", "index.html", [
    [ "Introduction", "intro.html", [
      [ "Features Included in this Release", "intro.html#intro_features", null ],
      [ "Relevant papers", "intro.html#Refs", [
        [ "HiFST, HiPDT and Hierarchical Phrase-Based Decoding", "intro.html#Refs_decoding", null ],
        [ "CUED SMT System Descriptions", "intro.html#Refs_systems", null ],
        [ "OpenFST and Related Modelling Techniques", "intro.html#Refs_fsts", null ],
        [ "Lattice Minimum Bayes Risk Decoding using WFSAs", "intro.html#Refs_lmbr", null ],
        [ "Mert", "intro.html#lmert_refs", null ],
        [ "HiFST Rule Extraction", "intro.html#rulextract_refs", null ],
        [ "Non-functional FST disambiguation", "intro.html#nffstdisambig_refs", null ],
        [ "Rescoring with Bilingual Neural Network Models", "intro.html#bilingualmodel_refs", null ],
        [ "Neural Machine Translation", "intro.html#nmt_refs", null ],
        [ "Language Modelling Toolkits and Other Tools", "intro.html#othertools", null ]
      ] ]
    ] ],
    [ "Installation", "build.html", [
      [ "HiFST Binary Installation", "build.html#install_binaries", null ],
      [ "HiFST Paths and Environment Variables", "build.html#hifst_paths", null ],
      [ "Installation of the Hadoop-based Grammar Extraction Tools", "build.html#rulextract_install", null ],
      [ "Tutorial Installation", "build.html#tutorial_install", null ]
    ] ],
    [ "HiFST Data and Control Files", "tutorial_.html", [
      [ "Tutorial Directory Structure", "tutorial_.html#tutorial_directories", null ],
      [ "Configuration Files and Command Line Options", "tutorial_.html#Setup_configs", null ],
      [ "Word Maps", "tutorial_.html#wmaps", null ],
      [ "Integer-Mapped Text Files", "tutorial_.html#wmappedfiles", null ],
      [ "Language Models", "tutorial_.html#lms", null ],
      [ "Translation Grammars", "tutorial_.html#tgrammars", [
        [ "Grammar File Formats", "tutorial_.html#rules", null ],
        [ "Feature Vectors", "tutorial_.html#tgrammars_formats_fea", null ],
        [ "Non-Terminals", "tutorial_.html#tgrammars_formats_nt", null ],
        [ "Shallow-N Translation Grammars", "tutorial_.html#tgrammars_shallow", null ]
      ] ]
    ] ],
    [ "Translation and FST Operations", "basictrans.html", [
      [ "Basic Translation Operations", "basictrans.html#basic_trans", null ],
      [ "Printing the 1-Best Hypotheses", "basictrans.html#printing_hyps", null ],
      [ "Extracting the Best Translation from a Lattice", "basictrans.html#basic_latshyps", [
        [ "OpenFst ShortestPath Operations", "basictrans.html#fst_shortestpath_discuss", null ]
      ] ],
      [ "Extracting N-Best Translations from Lattices", "basictrans.html#basic_nbest", null ],
      [ "Weight Vectors and Feature Vectors", "basictrans.html#vector_feature_grammars", null ],
      [ "Applying Weight Vectors in Translation", "basictrans.html#weight_feature_vector_examples", null ],
      [ "Lexicographic Semirings: Translation Grammar and Language Model Scores", "basictrans.html#basic_scores", null ],
      [ "Admissible Pruning", "basictrans.html#basic_toplevelpruning", null ],
      [ "Inadmissible Pruning", "basictrans.html#lpruning", [
        [ "Local Pruning Algorithm", "basictrans.html#local_prune", null ],
        [ "Effect on Speed, Memory, Scores", "basictrans.html#lpruning_effects", null ]
      ] ],
      [ "Language Model Rescoring", "basictrans.html#rescoring_lm", null ],
      [ "Multithreading", "basictrans.html#multithread", null ],
      [ "Lattice Minimum Bayes Risk Decoding", "basictrans.html#lmbr", null ],
      [ "MERT (Features Only)", "basictrans.html#mert", [
        [ "Step 1. Hypotheses for MERT", "basictrans.html#mert_hyps", null ],
        [ "Step 2. Guided Translation / Forced Alignment", "basictrans.html#mert_nblist_derivations", null ],
        [ "Step 3. Hypotheses with Unweighted Feature Vectors", "basictrans.html#mert_alilats", null ]
      ] ],
      [ "Lattice MERT", "basictrans.html#lmert", [
        [ "Step 1. Hypotheses for LMERT", "basictrans.html#lmert_hyps", null ],
        [ "Step 2. Guided Translation / Forced Alignment", "basictrans.html#lmert_veclats", null ],
        [ "Step 3. WFSAs with Unweighted Feature Vectors", "basictrans.html#lmert_alilats", null ],
        [ "Step 4. LMERT", "basictrans.html#lmert_lmert", null ],
        [ "BLEU, References, and De/Tokenization", "basictrans.html#lmert_references", null ]
      ] ],
      [ "Tropical Sparse Tuple Semiring", "basictrans.html#lmert_veclats_tst", null ],
      [ "Source Sentence Chopping", "basictrans.html#chopping", [
        [ "Chopping by Explicit Source Sentence Segmentation", "basictrans.html#chopping_sseg", null ],
        [ "Grammar-based Sentence Chopping", "basictrans.html#chopping_gb", [
          [ "Converting Grammars and Input Text for Chopping", "basictrans.html#chopping_eg", null ]
        ] ]
      ] ],
      [ "FST-based True Casing", "basictrans.html#true_casing", null ],
      [ "Client-Server Mode (Experimental)", "basictrans.html#server", null ]
    ] ],
    [ "RTNs and PDAs", "pda.html", [
      [ "Generating RTNs", "pda.html#pda_rtns", null ],
      [ "Translation by RTN Expansion to WFSAs", "pda.html#pda_rtn_expansion", [
        [ "Applying the LM to the WFSA", "pda.html#rtn_lm_app", null ]
      ] ],
      [ "Translation by PDA Pruned Expansion", "pda.html#pda_pda_expand", null ]
    ] ],
    [ "Multi-dimensional MERT", "rsearch.html", [
      [ "Step 1. Feature Projection", "rsearch.html#affine_project", null ],
      [ "Step 2. Convex Hulls of Projected Features", "rsearch.html#convex_hull", null ],
      [ "Step 3. Reverse Search", "rsearch.html#reverse_search_op", null ],
      [ "Step 4. Reranking", "rsearch.html#reverse_search_reranking", null ]
    ] ],
    [ "Rule Extraction", "rulextract.html", [
      [ "Prerequisites", "rulextract.html#rulextract_prerequisites", null ],
      [ "Tutorial", "rulextract.html#rulextract_tutorial_overview", [
        [ "Extraction", "rulextract.html#rulextract_tutorial_extraction", null ],
        [ "Retrieval", "rulextract.html#rulextract_tutorial_retrieval", null ],
        [ "Lexical Servers", "rulextract.html#rulextract_pipeline_lexserve", null ]
      ] ],
      [ "Filtering", "rulextract.html#rulextract_filtering", null ],
      [ "Configuration", "rulextract.html#rulextract_configuration_overview", null ]
    ] ],
    [ "Rescoring with Bilingual Neural Network Models", "bilm.html", null ],
    [ "Neural Machine Translation", "nmt.html", [
      [ "Lattice Rescoring with NMT", "nmt.html#lattice_rescoring", null ],
      [ "Combination via Edit Distance Transducer (WMT'16 Submission)", "nmt.html#edit_distance_based", null ]
    ] ],
    [ "Non-functional WFST Disambiguation", "nfdisambiguation.html", null ],
    [ "Appendices", "appendices.html", [
      [ "Using Grammars From Open Source SMT Systems", "appendices.html#gext", [
        [ "Moses", "appendices.html#gext_moses", null ],
        [ "Joshua and cdec", "appendices.html#gext_joshua", null ],
        [ "NiuTrans", "appendices.html#gext_niutrans", null ]
      ] ],
      [ "Translation Grammar Pruning", "appendices.html#grammarpruning", null ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"appendices.html"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';