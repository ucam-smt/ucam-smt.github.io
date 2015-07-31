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
        [ "Language Modelling Toolkits", "intro.html#othertools", null ]
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
      [ "Getting started", "rulextract.html#rulextract_start_reminder", null ],
      [ "Hadoop Cluster Setup", "rulextract.html#rulextract_cluster_setup", null ],
      [ "Pipeline Overview", "rulextract.html#rulextract_pipeline_overview", null ],
      [ "Grammar Extraction", "rulextract.html#rulextract_grammar_extraction", [
        [ "Running Commands", "rulextract.html#rulextract_commands", null ],
        [ "Data Loading", "rulextract.html#rulextract_load_data", null ],
        [ "Rule Extraction", "rulextract.html#rulextract_extract", null ],
        [ "Source-to-target Probability", "rulextract.html#rulextract_s2t", null ],
        [ "Target-to-source Probability", "rulextract.html#rulextract_t2s", null ],
        [ "Feature Merging", "rulextract.html#rulextract_merge", null ]
      ] ],
      [ "Grammar Filtering", "rulextract.html#rulextract_retrieval", [
        [ "Lexical Models Download", "rulextract.html#lex_model", null ],
        [ "Lexical Probability Servers", "rulextract.html#lex_prob_server", null ],
        [ "Hadoop Local Configuration", "rulextract.html#hadoop_local_conf", null ],
        [ "Grammar Filtering", "rulextract.html#retrieval", null ],
        [ "Grammar Formatting", "rulextract.html#grammar_conversion", null ]
      ] ],
      [ "Development", "rulextract.html#Development", [
        [ "IDE Development", "rulextract.html#ide", null ],
        [ "Adding a Local Feature", "rulextract.html#local_feature", null ],
        [ "Adding a MapReduce Feature", "rulextract.html#mapreduce_feature", null ]
      ] ]
    ] ],
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
var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';
var navTreeSubIndices = new Array();

function getData(varName)
{
  var i = varName.lastIndexOf('/');
  var n = i>=0 ? varName.substring(i+1) : varName;
  return eval(n.replace(/\-/g,'_'));
}

function stripPath(uri)
{
  return uri.substring(uri.lastIndexOf('/')+1);
}

function stripPath2(uri)
{
  var i = uri.lastIndexOf('/');
  var s = uri.substring(i+1);
  var m = uri.substring(0,i+1).match(/\/d\w\/d\w\w\/$/);
  return m ? uri.substring(i-6) : s;
}

function localStorageSupported()
{
  try {
    return 'localStorage' in window && window['localStorage'] !== null && window.localStorage.getItem;
  }
  catch(e) {
    return false;
  }
}


function storeLink(link)
{
  if (!$("#nav-sync").hasClass('sync') && localStorageSupported()) {
      window.localStorage.setItem('navpath',link);
  }
}

function deleteLink()
{
  if (localStorageSupported()) {
    window.localStorage.setItem('navpath','');
  } 
}

function cachedLink()
{
  if (localStorageSupported()) {
    return window.localStorage.getItem('navpath');
  } else {
    return '';
  }
}

function getScript(scriptName,func,show)
{
  var head = document.getElementsByTagName("head")[0]; 
  var script = document.createElement('script');
  script.id = scriptName;
  script.type = 'text/javascript';
  script.onload = func; 
  script.src = scriptName+'.js'; 
  if ($.browser.msie && $.browser.version<=8) { 
    // script.onload does not work with older versions of IE
    script.onreadystatechange = function() {
      if (script.readyState=='complete' || script.readyState=='loaded') { 
        func(); if (show) showRoot(); 
      }
    }
  }
  head.appendChild(script); 
}

function createIndent(o,domNode,node,level)
{
  var level=-1;
  var n = node;
  while (n.parentNode) { level++; n=n.parentNode; }
  if (node.childrenData) {
    var imgNode = document.createElement("img");
    imgNode.style.paddingLeft=(16*level).toString()+'px';
    imgNode.width  = 16;
    imgNode.height = 22;
    imgNode.border = 0;
    node.plus_img = imgNode;
    node.expandToggle = document.createElement("a");
    node.expandToggle.href = "javascript:void(0)";
    node.expandToggle.onclick = function() {
      if (node.expanded) {
        $(node.getChildrenUL()).slideUp("fast");
        node.plus_img.src = node.relpath+"ftv2pnode.png";
        node.expanded = false;
      } else {
        expandNode(o, node, false, false);
      }
    }
    node.expandToggle.appendChild(imgNode);
    domNode.appendChild(node.expandToggle);
    imgNode.src = node.relpath+"ftv2pnode.png";
  } else {
    var span = document.createElement("span");
    span.style.display = 'inline-block';
    span.style.width   = 16*(level+1)+'px';
    span.style.height  = '22px';
    span.innerHTML = '&#160;';
    domNode.appendChild(span);
  } 
}

var animationInProgress = false;

function gotoAnchor(anchor,aname,updateLocation)
{
  var pos, docContent = $('#doc-content');
  if (anchor.parent().attr('class')=='memItemLeft' ||
      anchor.parent().attr('class')=='fieldtype' ||
      anchor.parent().is(':header')) 
  {
    pos = anchor.parent().position().top;
  } else if (anchor.position()) {
    pos = anchor.position().top;
  }
  if (pos) {
    var dist = Math.abs(Math.min(
               pos-docContent.offset().top,
               docContent[0].scrollHeight-
               docContent.height()-docContent.scrollTop()));
    animationInProgress=true;
    docContent.animate({
      scrollTop: pos + docContent.scrollTop() - docContent.offset().top
    },Math.max(50,Math.min(500,dist)),function(){
      if (updateLocation) window.location.href=aname;
      animationInProgress=false;
    });
  }
}

function newNode(o, po, text, link, childrenData, lastNode)
{
  var node = new Object();
  node.children = Array();
  node.childrenData = childrenData;
  node.depth = po.depth + 1;
  node.relpath = po.relpath;
  node.isLast = lastNode;

  node.li = document.createElement("li");
  po.getChildrenUL().appendChild(node.li);
  node.parentNode = po;

  node.itemDiv = document.createElement("div");
  node.itemDiv.className = "item";

  node.labelSpan = document.createElement("span");
  node.labelSpan.className = "label";

  createIndent(o,node.itemDiv,node,0);
  node.itemDiv.appendChild(node.labelSpan);
  node.li.appendChild(node.itemDiv);

  var a = document.createElement("a");
  node.labelSpan.appendChild(a);
  node.label = document.createTextNode(text);
  node.expanded = false;
  a.appendChild(node.label);
  if (link) {
    var url;
    if (link.substring(0,1)=='^') {
      url = link.substring(1);
      link = url;
    } else {
      url = node.relpath+link;
    }
    a.className = stripPath(link.replace('#',':'));
    if (link.indexOf('#')!=-1) {
      var aname = '#'+link.split('#')[1];
      var srcPage = stripPath($(location).attr('pathname'));
      var targetPage = stripPath(link.split('#')[0]);
      a.href = srcPage!=targetPage ? url : "javascript:void(0)"; 
      a.onclick = function(){
        storeLink(link);
        if (!$(a).parent().parent().hasClass('selected'))
        {
          $('.item').removeClass('selected');
          $('.item').removeAttr('id');
          $(a).parent().parent().addClass('selected');
          $(a).parent().parent().attr('id','selected');
        }
        var anchor = $(aname);
        gotoAnchor(anchor,aname,true);
      };
    } else {
      a.href = url;
      a.onclick = function() { storeLink(link); }
    }
  } else {
    if (childrenData != null) 
    {
      a.className = "nolink";
      a.href = "javascript:void(0)";
      a.onclick = node.expandToggle.onclick;
    }
  }

  node.childrenUL = null;
  node.getChildrenUL = function() {
    if (!node.childrenUL) {
      node.childrenUL = document.createElement("ul");
      node.childrenUL.className = "children_ul";
      node.childrenUL.style.display = "none";
      node.li.appendChild(node.childrenUL);
    }
    return node.childrenUL;
  };

  return node;
}

function showRoot()
{
  var headerHeight = $("#top").height();
  var footerHeight = $("#nav-path").height();
  var windowHeight = $(window).height() - headerHeight - footerHeight;
  (function (){ // retry until we can scroll to the selected item
    try {
      var navtree=$('#nav-tree');
      navtree.scrollTo('#selected',0,{offset:-windowHeight/2});
    } catch (err) {
      setTimeout(arguments.callee, 0);
    }
  })();
}

function expandNode(o, node, imm, showRoot)
{
  if (node.childrenData && !node.expanded) {
    if (typeof(node.childrenData)==='string') {
      var varName    = node.childrenData;
      getScript(node.relpath+varName,function(){
        node.childrenData = getData(varName);
        expandNode(o, node, imm, showRoot);
      }, showRoot);
    } else {
      if (!node.childrenVisited) {
        getNode(o, node);
      } if (imm || ($.browser.msie && $.browser.version>8)) { 
        // somehow slideDown jumps to the start of tree for IE9 :-(
        $(node.getChildrenUL()).show();
      } else {
        $(node.getChildrenUL()).slideDown("fast");
      }
      if (node.isLast) {
        node.plus_img.src = node.relpath+"ftv2mlastnode.png";
      } else {
        node.plus_img.src = node.relpath+"ftv2mnode.png";
      }
      node.expanded = true;
    }
  }
}

function glowEffect(n,duration)
{
  n.addClass('glow').delay(duration).queue(function(next){
    $(this).removeClass('glow');next();
  });
}

function highlightAnchor()
{
  var aname = $(location).attr('hash');
  var anchor = $(aname);
  if (anchor.parent().attr('class')=='memItemLeft'){
    var rows = $('.memberdecls tr[class$="'+
               window.location.hash.substring(1)+'"]');
    glowEffect(rows.children(),300); // member without details
  } else if (anchor.parents().slice(2).prop('tagName')=='TR') {
    glowEffect(anchor.parents('div.memitem'),1000); // enum value
  } else if (anchor.parent().attr('class')=='fieldtype'){
    glowEffect(anchor.parent().parent(),1000); // struct field
  } else if (anchor.parent().is(":header")) {
    glowEffect(anchor.parent(),1000); // section header
  } else {
    glowEffect(anchor.next(),1000); // normal member
  }
  gotoAnchor(anchor,aname,false);
}

function selectAndHighlight(hash,n)
{
  var a;
  if (hash) {
    var link=stripPath($(location).attr('pathname'))+':'+hash.substring(1);
    a=$('.item a[class$="'+link+'"]');
  }
  if (a && a.length) {
    a.parent().parent().addClass('selected');
    a.parent().parent().attr('id','selected');
    highlightAnchor();
  } else if (n) {
    $(n.itemDiv).addClass('selected');
    $(n.itemDiv).attr('id','selected');
  }
  if ($('#nav-tree-contents .item:first').hasClass('selected')) {
    $('#nav-sync').css('top','30px');
  } else {
    $('#nav-sync').css('top','5px');
  }
  showRoot();
}

function showNode(o, node, index, hash)
{
  if (node && node.childrenData) {
    if (typeof(node.childrenData)==='string') {
      var varName    = node.childrenData;
      getScript(node.relpath+varName,function(){
        node.childrenData = getData(varName);
        showNode(o,node,index,hash);
      },true);
    } else {
      if (!node.childrenVisited) {
        getNode(o, node);
      }
      $(node.getChildrenUL()).css({'display':'block'});
      if (node.isLast) {
        node.plus_img.src = node.relpath+"ftv2mlastnode.png";
      } else {
        node.plus_img.src = node.relpath+"ftv2mnode.png";
      }
      node.expanded = true;
      var n = node.children[o.breadcrumbs[index]];
      if (index+1<o.breadcrumbs.length) {
        showNode(o,n,index+1,hash);
      } else {
        if (typeof(n.childrenData)==='string') {
          var varName = n.childrenData;
          getScript(n.relpath+varName,function(){
            n.childrenData = getData(varName);
            node.expanded=false;
            showNode(o,node,index,hash); // retry with child node expanded
          },true);
        } else {
          var rootBase = stripPath(o.toroot.replace(/\..+$/, ''));
          if (rootBase=="index" || rootBase=="pages" || rootBase=="search") {
            expandNode(o, n, true, true);
          }
          selectAndHighlight(hash,n);
        }
      }
    }
  } else {
    selectAndHighlight(hash);
  }
}

function removeToInsertLater(element) {
  var parentNode = element.parentNode;
  var nextSibling = element.nextSibling;
  parentNode.removeChild(element);
  return function() {
    if (nextSibling) {
      parentNode.insertBefore(element, nextSibling);
    } else {
      parentNode.appendChild(element);
    }
  };
}

function getNode(o, po)
{
  var insertFunction = removeToInsertLater(po.li);
  po.childrenVisited = true;
  var l = po.childrenData.length-1;
  for (var i in po.childrenData) {
    var nodeData = po.childrenData[i];
    po.children[i] = newNode(o, po, nodeData[0], nodeData[1], nodeData[2],
      i==l);
  }
  insertFunction();
}

function gotoNode(o,subIndex,root,hash,relpath)
{
  var nti = navTreeSubIndices[subIndex][root+hash];
  o.breadcrumbs = $.extend(true, [], nti ? nti : navTreeSubIndices[subIndex][root]);
  if (!o.breadcrumbs && root!=NAVTREE[0][1]) { // fallback: show index
    navTo(o,NAVTREE[0][1],"",relpath);
    $('.item').removeClass('selected');
    $('.item').removeAttr('id');
  }
  if (o.breadcrumbs) {
    o.breadcrumbs.unshift(0); // add 0 for root node
    showNode(o, o.node, 0, hash);
  }
}

function navTo(o,root,hash,relpath)
{
  var link = cachedLink();
  if (link) {
    var parts = link.split('#');
    root = parts[0];
    if (parts.length>1) hash = '#'+parts[1];
    else hash='';
  }
  if (hash.match(/^#l\d+$/)) {
    var anchor=$('a[name='+hash.substring(1)+']');
    glowEffect(anchor.parent(),1000); // line number
    hash=''; // strip line number anchors
    //root=root.replace(/_source\./,'.'); // source link to doc link
  }
  var url=root+hash;
  var i=-1;
  while (NAVTREEINDEX[i+1]<=url) i++;
  if (i==-1) { i=0; root=NAVTREE[0][1]; } // fallback: show index
  if (navTreeSubIndices[i]) {
    gotoNode(o,i,root,hash,relpath)
  } else {
    getScript(relpath+'navtreeindex'+i,function(){
      navTreeSubIndices[i] = eval('NAVTREEINDEX'+i);
      if (navTreeSubIndices[i]) {
        gotoNode(o,i,root,hash,relpath);
      }
    },true);
  }
}

function showSyncOff(n,relpath)
{
    n.html('<img src="'+relpath+'sync_off.png" title="'+SYNCOFFMSG+'"/>');
}

function showSyncOn(n,relpath)
{
    n.html('<img src="'+relpath+'sync_on.png" title="'+SYNCONMSG+'"/>');
}

function toggleSyncButton(relpath)
{
  var navSync = $('#nav-sync');
  if (navSync.hasClass('sync')) {
    navSync.removeClass('sync');
    showSyncOff(navSync,relpath);
    storeLink(stripPath2($(location).attr('pathname'))+$(location).attr('hash'));
  } else {
    navSync.addClass('sync');
    showSyncOn(navSync,relpath);
    deleteLink();
  }
}

function initNavTree(toroot,relpath)
{
  var o = new Object();
  o.toroot = toroot;
  o.node = new Object();
  o.node.li = document.getElementById("nav-tree-contents");
  o.node.childrenData = NAVTREE;
  o.node.children = new Array();
  o.node.childrenUL = document.createElement("ul");
  o.node.getChildrenUL = function() { return o.node.childrenUL; };
  o.node.li.appendChild(o.node.childrenUL);
  o.node.depth = 0;
  o.node.relpath = relpath;
  o.node.expanded = false;
  o.node.isLast = true;
  o.node.plus_img = document.createElement("img");
  o.node.plus_img.src = relpath+"ftv2pnode.png";
  o.node.plus_img.width = 16;
  o.node.plus_img.height = 22;

  if (localStorageSupported()) {
    var navSync = $('#nav-sync');
    if (cachedLink()) {
      showSyncOff(navSync,relpath);
      navSync.removeClass('sync');
    } else {
      showSyncOn(navSync,relpath);
    }
    navSync.click(function(){ toggleSyncButton(relpath); });
  }

  $(window).load(function(){
    navTo(o,toroot,window.location.hash,relpath);
    showRoot();
  });

  $(window).bind('hashchange', function(){
     if (window.location.hash && window.location.hash.length>1){
       var a;
       if ($(location).attr('hash')){
         var clslink=stripPath($(location).attr('pathname'))+':'+
                               $(location).attr('hash').substring(1);
         a=$('.item a[class$="'+clslink+'"]');
       }
       if (a==null || !$(a).parent().parent().hasClass('selected')){
         $('.item').removeClass('selected');
         $('.item').removeAttr('id');
       }
       var link=stripPath2($(location).attr('pathname'));
       navTo(o,link,$(location).attr('hash'),relpath);
     } else if (!animationInProgress) {
       $('#doc-content').scrollTop(0);
       $('.item').removeClass('selected');
       $('.item').removeAttr('id');
       navTo(o,toroot,window.location.hash,relpath);
     }
  })
}

