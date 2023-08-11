function doSomething(obj) {
            const songtitle = obj.songtitle;
            const separatorIndex = songtitle.indexOf(' - ');
            const artista = songtitle.slice(0, separatorIndex).trim();
            const cancion = songtitle.slice(separatorIndex + 3).trim();

            document.getElementById('artista').textContent = artista;
            document.getElementById('cancion').textContent = cancion;
        }

        var getShout = (function() {
            var script;

            return function shout(fn, sc, sid) {
                if (script) {
                    document.body.removeChild(script);
                }
                script = document.createElement('script');
                script.src = sc + 'stats?json=1&callback=' + fn + '&sid=' + sid + '&rand=' + Math.random();
                document.body.appendChild(script);
            };
        })();

        function actualizarCada10Segundos() {
            getShout('doSomething', 'http://audio.streaminghd.cl:9146/', 1);
        }

        setInterval(actualizarCada10Segundos, 100000);
