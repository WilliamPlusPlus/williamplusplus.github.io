(function () {
    var root = document.documentElement;
    var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
        return;
    }

    var baseHues = [197, 152, 51];
    var speeds = [3.1, 2.3, 4.7];
    var start = null;

    function tick(timestamp) {
        if (start === null) {
            start = timestamp;
        }
        var elapsedSeconds = (timestamp - start) / 1000;

        for (var i = 0; i < baseHues.length; i++) {
            var hue = baseHues[i] + Math.sin(elapsedSeconds / 20 * speeds[i]) * 18;
            root.style.setProperty("--hue-" + (i + 1), hue.toFixed(1));
        }

        var angle = 152 + Math.sin(elapsedSeconds / 30) * 12;
        root.style.setProperty("--angle", angle.toFixed(1) + "deg");

        requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
})();
