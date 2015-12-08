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
    [ "Non-functional WFST Disambiguation", "nfdisambiguation.html", null ],
    [ "Appendices", "appendices.html", [
      [ "Using Grammars From Open Source SMT Systems", "appendices.html#gext", [
        [ "Moses", "appendices.html#gext_moses", null ],
        [ "Joshua and cdec", "appendices.html#gext_joshua", null ],
        [ "NiuTrans", "appendices.html#gext_niutrans", null ]
      ] ],
      [ "Translation Grammar Pruning", "appendices.html#grammarpruning", null ]
    ] ],
    [ "Namespaces", null, [
      [ "Namespace List", "namespaces.html", "namespaces" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", "namespacemembers_dup" ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Variables", "namespacemembers_vars.html", null ],
        [ "Typedefs", "namespacemembers_type.html", null ]
      ] ]
    ] ],
    [ "Classes", null, [
      [ "Class List", "annotated.html", "annotated" ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", "functions_vars" ],
        [ "Typedefs", "functions_type.html", null ],
        [ "Related Functions", "functions_rela.html", null ]
      ] ]
    ] ],
    [ "Files", null, [
      [ "File List", "files.html", "files" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", "globals_dup" ],
        [ "Functions", "globals_func.html", "globals_func" ],
        [ "Variables", "globals_vars.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"AlignmentAndFeatureMap_8java.html",
"Source2TargetProbability_8java_source.html",
"classOptimizer.html#a5088b5ce9b43cec09b0efc5e4a20eba7",
"classucam_1_1fsttools_1_1FeatureTracker.html#ac3e07c876b765cb8a85699aec61e0ddf",
"classucam_1_1hifst_1_1ReferenceFilterTask.html#a06cc462ddd20ef979d19d07950f178c9",
"classuk_1_1ac_1_1cam_1_1eng_1_1extraction_1_1datatypes_1_1Alignment.html",
"constants-fsttools_8hpp.html#a262140539a78410140b0c879d39890a3",
"enumuk_1_1ac_1_1cam_1_1eng_1_1extraction_1_1hadoop_1_1features_1_1MapReduceFeature.html",
"global__decls_8hpp.html#a349dad5e520932e840e6f8fc806bd94d",
"lmbr_8gtest_8cpp.html#a00a2224d6982001100e8fa801d21b17a",
"namespaceuk_1_1ac_1_1cam_1_1eng_1_1extraction_1_1hadoop_1_1datatypes.html",
"structfst_1_1Hyp.html#a2b784fd9f4396c7453236992c3315db8",
"structucam_1_1fsttools_1_1StateHandler.html#af7bd43cf4ec778ccb001520204521f60",
"task_8patternstoinstances_8hpp_source.html"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';