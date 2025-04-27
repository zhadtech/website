document.addEventListener('DOMContentLoaded', function() {
  // Initialize mermaid if it's loaded
  if (typeof mermaid !== 'undefined') {
    // Basic configuration
    mermaid.initialize({
      startOnLoad: true,
      theme: 'default',
      securityLevel: 'loose',
      flowchart: {
        useMaxWidth: true,
        htmlLabels: true
      }
    });
    
    // Force render any mermaid diagrams that weren't automatically processed
    setTimeout(function() {
      document.querySelectorAll('.mermaid:not([data-processed="true"])').forEach(function(el) {
        if (!el.hasAttribute('data-processed')) {
          mermaid.init(undefined, el);
        }
      });
    }, 500);
  } else {
    console.warn('Mermaid library not loaded');
  }
}); 