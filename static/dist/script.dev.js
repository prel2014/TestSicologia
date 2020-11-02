"use strict";

var app = new Vue({
  el: '#app',
  data: {
    grupo: [],
    pagina: 0,
    tipoE: 0,
    tipoN: 0,
    tipoL: 0,
    titulo: 'Cuestionario',
    preguntasMostrar: [],
    dejar: [],
    preguntas: [{
      p: '1. ¿Le gusta abundancia de excitación y bullicio a su alrededor?',
      respuesta: '',
      valor: [],
      tipo: 'E'
    }, {
      p: '2. ¿Tiene a menudo un sentimiento de intranquilidad, como si quisiera algo, pero sin saber qué?',
      respuesta: '',
      valor: [],
      tipo: 'N'
    }, {
      p: '3. ¿Tiene casi siempre una contestación lista a la mano cuando se le habla?',
      respuesta: '',
      valor: [],
      tipo: 'E'
    }, {
      p: '4. ¿Se siente algunas veces feliz, algunas veces triste, sin una razón real?',
      respuesta: '',
      valor: [],
      tipo: 'N'
    }, {
      p: '5. ¿Permanece usualmente retraído (a) en fiestas y reuniones?',
      respuesta: '',
      valor: [],
      tipo: 'E'
    }, {
      p: '6. ¿Cuando era niño(a) ¿hacia siempre inmediatamente lo que le decían, sin refunfuñar?',
      respuesta: '',
      valor: [],
      tipo: 'L'
    }, {
      p: '7. ¿Se enfada o molesta a menudo?',
      respuesta: '',
      valor: [],
      tipo: 'N'
    }, {
      p: '8. Cuando lo(a) meten a una pelea  ¿Prefiere sacar los trapitos al aire de una vez por todas, en vez de   quedar callado(a) esperando que las cosas se calmen solas?',
      respuesta: '',
      valor: [],
      tipo: 'E'
    }, {
      p: '9. ¿Es usted triste, melancólico (a)?',
      respuesta: '',
      valor: [],
      tipo: 'N'
    }, {
      p: '10. ¿Le gusta mezclarse con la gente?',
      respuesta: '',
      valor: [],
      tipo: 'E'
    }, {
      p: '11. ¿Ha perdido a menudo el sueño por sus preocupaciones?',
      respuesta: '',
      valor: [],
      tipo: 'N'
    }, {
      p: '12. ¿Se pone a veces malhumorado (a)?',
      respuesta: '',
      valor: [],
      tipo: 'L'
    }, {
      p: '13. ¿Se catalogaría a si mismo(a) como despreocupado (a) o confiado a su buena suerte',
      respuesta: '',
      valor: [],
      tipo: 'E'
    }, {
      p: '14. ¿Se decide a menudo demasiado tarde?',
      respuesta: '',
      valor: [],
      tipo: 'N'
    }, {
      p: '15. ¿Le gusta trabajar solo (a)?',
      respuesta: '',
      valor: [],
      tipo: 'E'
    }, {
      p: '16. ¿Se ha sentido a menudo apático (a) y cansado(a) sin razón?',
      respuesta: '',
      valor: [],
      tipo: 'N'
    }, {
      p: '17. ¿Es por lo contrario animado(a) y jovial?',
      respuesta: '',
      valor: [],
      tipo: 'E'
    }, {
      p: '18. ¿Se ríe a menudo de chistes groseros?',
      respuesta: '',
      valor: [],
      tipo: 'L'
    }, {
      p: '19. ¿Se siente a menudo hastiado(a), harto, fastidiado?',
      respuesta: '',
      valor: [],
      tipo: 'N'
    }, {
      p: '20. ¿Se siente incomodo(a) con vestidos que no son del diario?',
      respuesta: '',
      valor: [],
      tipo: 'E'
    }, {
      p: '21. ¿Se distrae (vaga su mente) a menudo cuando trata de prestar atención a algo?',
      respuesta: '',
      valor: [],
      tipo: 'N'
    }, {
      p: '22. ¿Puede expresar en palabras fácilmente lo que piensa?',
      respuesta: '',
      valor: [],
      tipo: 'E'
    }, {
      p: '23. ¿Se abstrae (se pierde en sus pensamientos) a menudo?',
      respuesta: '',
      valor: [],
      tipo: 'N'
    }, {
      p: '24. ¿Está completamente libre de prejuicios de cualquier tipo?',
      respuesta: '',
      valor: [],
      tipo: 'L'
    }, {
      p: '25. ¿Le gusta las bromas?',
      respuesta: '',
      valor: [],
      tipo: 'E'
    }, {
      p: '26. ¿Piensa a menudo en su pasado?',
      respuesta: '',
      valor: [],
      tipo: 'N'
    }, {
      p: '27. ¿Le gusta mucho la buena comida?',
      respuesta: '',
      valor: [],
      tipo: 'E'
    }, {
      p: '28. ¿Cuándo se fastidia ¿necesita algún(a) amigo(a) para hablar sobre ello?',
      respuesta: '',
      valor: [],
      tipo: 'N'
    }, {
      p: '29. ¿Le molesta vender cosas o pedir dinero a la gente para alguna buena causa?',
      respuesta: '',
      valor: [],
      tipo: 'E'
    }, {
      p: '30. ¿Alardea (se jacta) un poco a veces?',
      respuesta: '',
      valor: [],
      tipo: 'L'
    }, {
      p: '31. ¿Es usted muy susceptible (sensible) por algunas cosas?',
      respuesta: '',
      valor: [],
      tipo: 'N'
    }, {
      p: '32. ¿Le gusta más quedarse en casa, que ir a una fiesta aburrida?',
      respuesta: '',
      valor: [],
      tipo: 'E'
    }, {
      p: '33. ¿Se pone a menudo tan inquieto(a) que no puede permanecer sentado(a) durante mucho rato en una silla?',
      respuesta: '',
      valor: [],
      tipo: 'N'
    }, {
      p: '34. ¿Le gusta planear las cosas, con mucha anticipación?',
      respuesta: '',
      valor: [],
      tipo: 'E'
    }, {
      p: '35. ¿Tiene a menudo mareos (vértigos)?',
      respuesta: '',
      valor: [],
      tipo: 'N'
    }, {
      p: '36. ¿Contesta siempre una carta personal, tan pronto como puede, después de haberla leído?',
      respuesta: '',
      valor: [],
      tipo: 'L'
    }, {
      p: '37. ¿Hace usted usualmente las cosas mejor resolviéndolas solo(a) que hablando a otra persona sobre ello?',
      respuesta: '',
      valor: [],
      tipo: 'E'
    }, {
      p: '38. ¿Le falta frecuentemente aire, sin haber hecho un trabajo pesado?',
      respuesta: '',
      valor: [],
      tipo: 'N'
    }, {
      p: '39. ¿Es usted generalmente una persona tolerante, que no se molesta si las cosas no están perfectas?',
      respuesta: '',
      valor: [],
      tipo: 'E'
    }, {
      p: '40. ¿Sufre de los nervios?',
      respuesta: '',
      valor: [],
      tipo: 'N'
    }, {
      p: '41. ¿Le gustaría más planear cosas, que hacer cosas?',
      respuesta: '',
      valor: [],
      tipo: 'E'
    }, {
      p: '42. ¿Deja algunas veces para mañana. Lo que debería hacer hoy día?',
      respuesta: '',
      valor: [],
      tipo: 'L'
    }, {
      p: '43. ¿Se pone nervioso(a) en lugares tales como ascensores, trenes o túneles?',
      respuesta: '',
      valor: [],
      tipo: 'N'
    }, {
      p: '44. Cuando hace nuevos amigos(as) ¿Es usted usualmente quien inicia la relación o invita a que se produzca?',
      respuesta: '',
      valor: [],
      tipo: 'E'
    }, {
      p: '45. ¿Sufre fuertes dolores de cabeza?',
      respuesta: '',
      valor: [],
      tipo: 'N'
    }, {
      p: '46. ¿Siente generalmente que las cosas se arreglaran por si solas y que terminaran bien de algún modo?',
      respuesta: '',
      valor: [],
      tipo: 'E'
    }, {
      p: '47. ¿Le cuesta trabajo coger el sueño al acostarse en las noches?',
      respuesta: '',
      valor: [],
      tipo: 'N'
    }, {
      p: '48. ¿Ha dicho alguna vez mentiras en su vida?',
      respuesta: '',
      valor: [],
      tipo: 'L'
    }, {
      p: '49. ¿Dice algunas veces lo primero que se le viene a la cabeza?',
      respuesta: '',
      valor: [],
      tipo: 'E'
    }, {
      p: '50. ¿Se preocupa durante un tiempo demasiado largo, después de una experiencia embarazosa?',
      respuesta: '',
      valor: [],
      tipo: 'N'
    }]
  },
  mounted: function mounted() {
    this.siguienteLote();
  },
  methods: {
    rellenar: function rellenar() {
      for (i = 1; i <= 50; i++) {
        this.grupo.push(i);
      }
    },
    siguienteLote: function siguienteLote() {
      this.dejar.splice(0);
      permiso = false;

      if (this.pagina == 0) {
        this.renderizar();
      } else {
        for (i = 0; i < 5; i++) {
          if (this.preguntasMostrar[i].valor.length == 0) {
            this.dejar.push(i + 1 + (this.pagina - 1) * 5);
          }
        }

        if (this.dejar.length == 0) {
          this.renderizar();
        } else {
          alert("Las siguientes preguntas no se han respondido:\n" + this.dejar);
        }
      }
    },
    Enviar: function Enviar() {
      var datos = {
        DimE: this.tipoE,
        DimL: this.tipoL,
        DimN: this.tipoN
      };
      axios.post("/Diagnostico", datos).then(function (result) {
        console.log(result);
      });
    },
    renderizar: function renderizar() {
      if (this.pagina != 0) {
        for (i = 0; i < 5; i++) {
          if (this.preguntas[i + 5 * (this.pagina - 1)].tipo == 'E' && this.preguntasMostrar[i].valor == '1') this.tipoE += 1;
          if (this.preguntas[i + 5 * (this.pagina - 1)].tipo == 'N' && this.preguntasMostrar[i].valor == '1') this.tipoN += 1;
          if (this.preguntas[i + 5 * (this.pagina - 1)].tipo == 'L' && this.preguntasMostrar[i].valor == '1') this.tipoL += 1;
        }
      }

      this.preguntasMostrar.splice(0);

      for (i = 5 * this.pagina; i < 5 * (this.pagina + 1); i++) {
        this.preguntasMostrar.push(this.preguntas[i]);
      }

      this.pagina += 1;
      if (this.pagina == this.preguntas.length / 5) this.Enviar();
    }
  }
});