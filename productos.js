const productos = [
  // ACRÍLICOS
  { id:1,  nombre:'Placa parcial',              cat:'acrilicos',       catLabel:'Acrílicos',       precio:2200, detalle:'',                   color:'#4a3f32', icon:'◈',
    desc:'Prótesis removible parcial de acrílico de alta calidad para reposición de dientes naturales. Acabado natural, durabilidad comprobada y ajuste confortable.',
    specs:[['Material','Acrílico termocurado'],['Tipo','Removible'],['Entrega','5–7 días hábiles'],['Garantía','Incluida']] },

  { id:2,  nombre:'Placa total',                cat:'acrilicos',       catLabel:'Acrílicos',       precio:2300, detalle:'',                   color:'#5a4e3f', icon:'◇',
    desc:'Prótesis completa removible en acrílico. Réplica fiel de la arcada natural con excelente soporte, retención y estética natural.',
    specs:[['Material','Acrílico termocurado'],['Tipo','Removible completa'],['Entrega','5–7 días hábiles'],['Garantía','Incluida']] },

  { id:3,  nombre:'Prótesis flexible unilateral',cat:'acrilicos',      catLabel:'Acrílicos',       precio:2200, detalle:'Unilateral',          color:'#3d3428', icon:'○',
    desc:'Prótesis flexible de un solo lado. Ligera, cómoda y de aspecto totalmente natural. Sin ganchos metálicos visibles. Material termoplástico de alta resistencia.',
    specs:[['Material','Termoplástico flexible'],['Tipo','Removible unilateral'],['Entrega','5–7 días hábiles'],['Garantía','Incluida']] },

  { id:4,  nombre:'Prótesis flexible bilateral', cat:'acrilicos',      catLabel:'Acrílicos',       precio:2450, detalle:'Bilateral',           color:'#4a3f32', icon:'◈',
    desc:'Prótesis flexible de ambos lados. Máxima adaptación al tejido blando, alta comodidad durante el uso y estética completamente natural.',
    specs:[['Material','Termoplástico flexible'],['Tipo','Removible bilateral'],['Entrega','5–7 días hábiles'],['Garantía','Incluida']] },

  { id:5,  nombre:'Prótesis flexible total',     cat:'acrilicos',      catLabel:'Acrílicos',       precio:2500, detalle:'Total',               color:'#5a4e3f', icon:'◇',
    desc:'Prótesis flexible completa. Alternativa moderna a la placa acrílica convencional. Mejor retención tisular, comodidad superior y apariencia natural.',
    specs:[['Material','Termoplástico flexible'],['Tipo','Removible completa'],['Entrega','5–7 días hábiles'],['Garantía','Incluida']] },

  { id:6,  nombre:'Diente provisional',          cat:'acrilicos',      catLabel:'Acrílicos',       precio:400,  detalle:'Por unidad',          color:'#3d3428', icon:'○',
    desc:'Diente acrílico provisional para uso temporal durante el tratamiento. Forma natural y fácil ajuste en sillón. Ideal como solución inmediata.',
    specs:[['Material','Acrílico'],['Tipo','Provisional'],['Entrega','2–3 días hábiles'],['Precio','Por unidad']] },

  { id:7,  nombre:'Diente modelado',             cat:'acrilicos',      catLabel:'Acrílicos',       precio:450,  detalle:'Por unidad',          color:'#4a3f32', icon:'◈',
    desc:'Diente modelado a mano con mayor detalle morfológico y cromatismo. Mayor naturalidad y personalización en el resultado final.',
    specs:[['Material','Acrílico modelado'],['Tipo','Modelado manual'],['Entrega','2–3 días hábiles'],['Precio','Por unidad']] },

  { id:8,  nombre:'Prótesis metálica',           cat:'acrilicos',      catLabel:'Acrílicos',       precio:3500, detalle:'1 a 4 unidades',      color:'#2e2820', icon:'◇',
    desc:'Armazón de metal colado con base acrílica. Mayor resistencia, menor volumen palatino y soporte superior. Indicado para casos de mayor exigencia.',
    specs:[['Material','Metal + acrílico'],['Unidades','1 a 4'],['Entrega','7–10 días hábiles'],['Garantía','Incluida']] },

  { id:9,  nombre:'Prótesis metálica extensa',   cat:'acrilicos',      catLabel:'Acrílicos',       precio:4000, detalle:'Más de 5 unidades',   color:'#3d3428', icon:'○',
    desc:'Armazón metálico para casos extensos de más de 5 unidades. Máxima resistencia estructural y longevidad del aparato protésico.',
    specs:[['Material','Metal + acrílico'],['Unidades','5 o más'],['Entrega','7–10 días hábiles'],['Garantía','Incluida']] },

  // RESINAS
  { id:10, nombre:'Corona PMMA',                 cat:'resinas',        catLabel:'Resinas',         precio:800,  detalle:'',                   color:'#2c3e50', icon:'◈',
    desc:'Corona provisional de PMMA fresada con alta precisión. Estética superior para temporales de larga duración en tratamientos implantológicos o protésicos complejos.',
    specs:[['Material','PMMA fresado'],['Tipo','Provisional'],['Entrega','3–5 días hábiles'],['Garantía','Incluida']] },

  { id:11, nombre:'Impresión de modelo',          cat:'resinas',        catLabel:'Resinas',         precio:300,  detalle:'1 modelo',           color:'#34495e', icon:'◇',
    desc:'Impresión 3D de modelo de estudio o trabajo. Alta precisión dimensional para planificación y verificación del caso clínico.',
    specs:[['Material','Resina fotopolimerizable'],['Tipo','Modelo de trabajo'],['Entrega','2–3 días hábiles'],['Precio','Por modelo']] },

  { id:12, nombre:'Impresión de 2 modelos',       cat:'resinas',        catLabel:'Resinas',         precio:500,  detalle:'Superior e inferior', color:'#2c3e50', icon:'○',
    desc:'Impresión 3D del par de modelos superior e inferior. Ideal para verificación de oclusión y planificación integral del tratamiento.',
    specs:[['Material','Resina fotopolimerizable'],['Tipo','Par de modelos'],['Entrega','2–3 días hábiles'],['Precio','Por par']] },

  { id:13, nombre:'Guarda oclusal fresada',       cat:'resinas',        catLabel:'Resinas',         precio:1500, detalle:'',                   color:'#34495e', icon:'◈',
    desc:'Guarda oclusal de resina de alta dureza fresada para protección nocturna y tratamiento del bruxismo. Ajuste preciso y máxima retención.',
    specs:[['Material','Resina dura fresada'],['Tipo','Guarda nocturna'],['Entrega','5–7 días hábiles'],['Garantía','Incluida']] },

  { id:14, nombre:'Armazón PEEK',                 cat:'resinas',        catLabel:'Resinas',         precio:3000, detalle:'',                   color:'#2c3e50', icon:'◇',
    desc:'Armazón de PEEK (poliéter éter cetona) de alta resistencia. Alternativa libre de metal, biocompatible, ligero y con excelente estabilidad a largo plazo.',
    specs:[['Material','PEEK fresado'],['Tipo','Armazón removible'],['Entrega','7–10 días hábiles'],['Garantía','Incluida']] },

  { id:15, nombre:'Diente fresado PMMA',          cat:'resinas',        catLabel:'Resinas',         precio:200,  detalle:'Por unidad',          color:'#34495e', icon:'○',
    desc:'Diente individual fresado en PMMA para reemplazo provisional de alta calidad. Morfología dentaria precisa y acabado pulido.',
    specs:[['Material','PMMA fresado'],['Tipo','Diente provisional'],['Entrega','2–3 días hábiles'],['Precio','Por unidad']] },

  // METAL PORCELANA
  { id:16, nombre:'Corona metal porcelana',       cat:'metal-porcelana',catLabel:'Metal Porcelana', precio:1300, detalle:'',                   color:'#4a2c0a', icon:'◈',
    desc:'Corona fija de estructura metálica con recubrimiento completo de porcelana. Resistencia estructural y estética comprobadas para todo tipo de casos.',
    specs:[['Material','Metal + porcelana'],['Tipo','Corona fija'],['Entrega','5–7 días hábiles'],['Garantía','Incluida']] },

  { id:17, nombre:'Corona MP con hombro',         cat:'metal-porcelana',catLabel:'Metal Porcelana', precio:1400, detalle:'Con hombro cerámico', color:'#5c3810', icon:'◇',
    desc:'Corona metal porcelana con hombro cerámico circunferencial. Mejor estética marginal, eliminación del halo metálico gingival y aspecto más natural en cervical.',
    specs:[['Material','Metal + porcelana'],['Detalle','Hombro cerámico'],['Entrega','5–7 días hábiles'],['Garantía','Incluida']] },

  { id:18, nombre:'Corona sobre implante',        cat:'metal-porcelana',catLabel:'Metal Porcelana', precio:1500, detalle:'Sobre implante',      color:'#4a2c0a', icon:'○',
    desc:'Corona metal porcelana atornillada o cementada sobre implante. Ajuste preciso al pilar con respeto del perfil de emergencia y resultado estético natural.',
    specs:[['Material','Metal + porcelana'],['Tipo','Sobre implante'],['Entrega','7–10 días hábiles'],['Garantía','Incluida']] },

  { id:19, nombre:'Corona metálica',              cat:'metal-porcelana',catLabel:'Metal Porcelana', precio:800,  detalle:'',                   color:'#3d2208', icon:'◈',
    desc:'Corona totalmente metálica para zonas posteriores de alta carga masticatoria. La opción más resistente y duradera. Ideal para primeros y segundos molares.',
    specs:[['Material','Metal colado'],['Tipo','Corona fija'],['Entrega','5–7 días hábiles'],['Garantía','Incluida']] },

  { id:20, nombre:'Puente Maryland MP',           cat:'metal-porcelana',catLabel:'Metal Porcelana', precio:1700, detalle:'3 unidades',          color:'#5c3810', icon:'◇',
    desc:'Puente adhesivo Maryland en metal porcelana. Alternativa conservadora sin preparación agresiva de pilares. Ideal para espacios edéntulos cortos.',
    specs:[['Material','Metal + porcelana'],['Unidades','3 unidades'],['Entrega','7–10 días hábiles'],['Garantía','Incluida']] },

  { id:21, nombre:'Poste modelado y vaciado',     cat:'metal-porcelana',catLabel:'Metal Porcelana', precio:500,  detalle:'Por unidad',          color:'#4a2c0a', icon:'○',
    desc:'Poste individualizado modelado en cera y vaciado en metal para restauraciones con estructura coronal escasa. Adaptación perfecta al conducto.',
    specs:[['Material','Metal colado'],['Tipo','Poste individualizado'],['Entrega','3–5 días hábiles'],['Precio','Por unidad']] },

  { id:22, nombre:'Pilar de titanio fresado',     cat:'metal-porcelana',catLabel:'Metal Porcelana', precio:500,  detalle:'Por unidad',          color:'#3d2208', icon:'◈',
    desc:'Pilar de titanio fresado a medida para coronas sobre implante. Máxima biocompatibilidad periimplantaria y precisión de ajuste al fixture.',
    specs:[['Material','Titanio fresado'],['Tipo','Pilar para implante'],['Entrega','3–5 días hábiles'],['Precio','Por unidad']] },

  // LIBRES DE METAL
  { id:23, nombre:'Corona de zirconia',           cat:'libres-metal',   catLabel:'Libres de Metal', precio:1700, detalle:'',                   color:'#2a3a2a', icon:'◈',
    desc:'Corona monolítica de zirconia de alta resistencia. Sin metal, biocompatible al 100%, aspecto natural y excelente comportamiento en sectores anteriores y posteriores.',
    specs:[['Material','Zirconia monolítica'],['Tipo','Corona fija'],['Entrega','7–10 días hábiles'],['Garantía','Incluida']] },

  { id:24, nombre:'Puente Maryland zirconia',     cat:'libres-metal',   catLabel:'Libres de Metal', precio:2000, detalle:'3 unidades',          color:'#344a34', icon:'◇',
    desc:'Puente adhesivo Maryland íntegramente en zirconia. Libre de metal, altamente estético y de excelente resistencia mecánica. Mínima preparación de pilares.',
    specs:[['Material','Zirconia'],['Unidades','3 unidades'],['Entrega','7–10 días hábiles'],['Garantía','Incluida']] },

  { id:25, nombre:'Corona s/implante zirconia',   cat:'libres-metal',   catLabel:'Libres de Metal', precio:2000, detalle:'Sobre implante',      color:'#2a3a2a', icon:'○',
    desc:'Corona de zirconia sobre implante. Sin metal, máxima biocompatibilidad periimplantaria y resultado estético natural con control del perfil de emergencia.',
    specs:[['Material','Zirconia'],['Tipo','Sobre implante'],['Entrega','7–10 días hábiles'],['Garantía','Incluida']] },

  { id:26, nombre:'Corona E-max',                 cat:'libres-metal',   catLabel:'Libres de Metal', precio:1500, detalle:'Disilicato de litio', color:'#344a34', icon:'◈',
    desc:'Corona de disilicato de litio E-max. El gold standard estético internacional. Alta translucidez, resistencia comprobada y aspecto completamente natural.',
    specs:[['Material','Disilicato de litio'],['Tipo','Corona fija'],['Entrega','7–10 días hábiles'],['Garantía','Incluida']] },

  { id:27, nombre:'Incrustación E-max',           cat:'libres-metal',   catLabel:'Libres de Metal', precio:1500, detalle:'Inlay / Onlay',       color:'#2a3a2a', icon:'◇',
    desc:'Incrustación inlay u onlay en disilicato de litio E-max. Restauración conservadora, altamente estética y de larga durabilidad clínica comprobada.',
    specs:[['Material','Disilicato de litio'],['Tipo','Inlay / Onlay'],['Entrega','5–7 días hábiles'],['Garantía','Incluida']] },

  { id:28, nombre:'Puente Maryland E-max',        cat:'libres-metal',   catLabel:'Libres de Metal', precio:2000, detalle:'3 unidades',          color:'#344a34', icon:'○',
    desc:'Puente adhesivo Maryland en E-max. Alta estética y mínima preparación dentaria. Ideal para reposición de incisivos con pilares sanos.',
    specs:[['Material','Disilicato de litio'],['Unidades','3 unidades'],['Entrega','7–10 días hábiles'],['Garantía','Incluida']] },

  { id:29, nombre:'Carilla',                      cat:'libres-metal',   catLabel:'Libres de Metal', precio:1500, detalle:'Por unidad',          color:'#2a3a2a', icon:'◈',
    desc:'Carilla cerámica de mínima preparación. Transforma la estética del sector anterior con desgaste mínimo de estructura dentaria. Alta translucidez y naturalismo.',
    specs:[['Material','Cerámica feldespática'],['Tipo','Carilla'],['Entrega','7–10 días hábiles'],['Precio','Por unidad']] },

  { id:30, nombre:'Carilla estratificada',        cat:'libres-metal',   catLabel:'Libres de Metal', precio:1700, detalle:'Por unidad',          color:'#344a34', icon:'◇',
    desc:'Carilla cerámica estratificada manualmente capa a capa. Máximo naturalismo cromático y personalización para casos de alta exigencia estética.',
    specs:[['Material','Cerámica estratificada'],['Tipo','Carilla premium'],['Entrega','10–14 días hábiles'],['Precio','Por unidad']] },
];

function formatPrice(n) {
  return '$' + n.toLocaleString('es-MX');
}
