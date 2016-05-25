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
      [ "Preparing Lattices for SGNMT", "nmt.html#prepare_lattices", null ],
      [ "Preparing RTNs for SGNMT", "nmt.html#prepare_rtns", null ]
    ] ],
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
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
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
"AlignmentCountMapWritable_8java.html",
"Util_8java_source.html",
"classRandomOptimizer.html#ad69ca704d2b3c5d84fa42a478f2bde71",
"classucam_1_1fsttools_1_1LoadWordMapTask.html#a8af4247c077b2b083e2528f2f586804e",
"classucam_1_1hifst_1_1SingleThreadedHifstClientTask.html",
"classuk_1_1ac_1_1cam_1_1eng_1_1extraction_1_1hadoop_1_1datatypes_1_1ProvenanceCountMap.html#a8248f4ebf9e3cc01f078ed2e3aa8bc9a",
"constants-hifst_8hpp.html#a50112095393a9a1e834550bffa452718",
"fstutils_8gtest_8cpp.html#a811c927c4c8c224625a108de10e6571c",
"globals_o.html",
"main_8applylm_8init__param__options_8hpp_source.html",
"range_8hpp.html#a0f3e5526599d1173525dfb4c9e605c1a",
"structfst_1_1Scorer_3_01lm_1_1np_1_1State_00_01lm_1_1np_1_1Model_00_01IdBridgeT_00_01HackScoreT_01_4.html#a362fa2a45c32f16f64ae399b744378bb",
"structucam_1_1hifst_1_1MakeWeightHifstLocalLm_3_01TupleArc32_01_4.html#a14a11cabadf2ef2d5bf98f3eb19941eb",
"weights_8gtest_8cpp.html#a486cccb7b6143a50014a9e2ee447c72b"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';