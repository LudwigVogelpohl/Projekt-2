document.getElementById("goal").onclick = function() {
    this.style.left = (parseInt(this.style.left) || 0) + 120 + "px";
    setTimeout(function() {
      alert("Toor. Das hast du gut gemacht");
      window.location.reload();
    }, 500); // Verzögerung von 0,5 Sekunden, bevor die Seite neu geladen wird
    this.onclick = null; // Deaktiviert das Onclick-Ereignis nach dem ersten Klick
};