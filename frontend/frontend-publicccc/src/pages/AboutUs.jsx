import React from "react";

const Title = ({ text }) => (
  <h1 className="text-4xl font-bold text-amber-900 mb-8 text-center">{text}</h1>
);

const SubTitle = ({ text }) => (
  <h2 className="text-2xl font-semibold text-amber-900 mb-6">{text}</h2>
);

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-amber-50 p-6">
      <div className="max-w-7xl mx-auto bg-stone-100 shadow-xl rounded-2xl p-8 border border-amber-200">
        <Title text="Acerca de Nosotros"/>
        
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row gap-8 items-center mb-12">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop&crop=faces"
            alt="Equipo EcoVision"
            className="w-full lg:w-1/2 rounded-xl shadow-lg border-4 border-amber-200"
          />
          <div className="lg:w-1/2">
            <SubTitle text="Nuestra Historia"/>
            <p className="text-amber-900 mb-4 leading-relaxed">
              EcoVision nació en 2021 con una visión clara: revolucionar la industria de la moda
              mediante prácticas sostenibles sin comprometer el estilo. Fundada por Fernando de Jesús 
              Hernández Morales, estudiante de tercer año del Instituto Técnico Ricaldone, quien desde 
              muy joven mostró una pasión extraordinaria por el diseño de moda y la conciencia ambiental. 
              Su misión es demostrar que la moda consciente puede ser accesible, moderna y deseable 
              para las nuevas generaciones.
            </p>
            <p className="text-amber-800 mb-4 leading-relaxed">
              Lo que comenzó como un proyecto escolar de Fernando en el Ricaldone, donde diseñó
              una pequeña colección de 20 prendas básicas confeccionadas con algodón orgánico
              certificado, pronto se convirtió en una marca de referencia en moda sostenible.
              Combinando sus conocimientos técnicos adquiridos en el instituto con su pasión
              por el medio ambiente, logró crear un catálogo que ha crecido exponencialmente:
              desde camisetas básicas hasta colecciones completas de temporada.
            </p>
            <p className="text-amber-900 leading-relaxed">
              En la actualidad, Fernando continúa sus estudios en el Ricaldone mientras lidera
              EcoVision con un equipo de jóvenes colaboradores. La empresa trabaja con más de
              50 proveedores certificados en 15 países diferentes, manteniendo siempre los
              estándares de comercio justo y sostenibilidad ambiental que Fernando aprendió
              a valorar desde su formación académica. Cada año invierten el 20% de las ganancias
              en investigación de nuevos materiales eco-friendly y programas de reforestación.
            </p>
          </div>
        </div>

        {/* Fashion Gallery */}
        <div className="mb-12">
          <SubTitle text="Nuestra Moda Sostenible"/>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <img
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=300&h=400&fit=crop"
              alt="Colección Casual EcoVision"
              className="w-full h-64 object-cover rounded-lg shadow-md border-2 border-amber-200"
            />
            <img
              src="https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=300&h=400&fit=crop"
              alt="Vestidos Sostenibles"
              className="w-full h-64 object-cover rounded-lg shadow-md border-2 border-amber-200"
            />
            <img
              src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=300&h=400&fit=crop"
              alt="Moda Urbana Eco"
              className="w-full h-64 object-cover rounded-lg shadow-md border-2 border-amber-200"
            />
            <img
              src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=300&h=400&fit=crop"
              alt="Outerwear Sostenible"
              className="w-full h-64 object-cover rounded-lg shadow-md border-2 border-amber-200"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            <img
              src="https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=400&h=500&fit=crop"
              alt="Denim Sostenible"
              className="w-full h-72 object-cover rounded-lg shadow-md border-2 border-amber-200"
            />
            <img
              src="https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400&h=500&fit=crop"
              alt="Tops Eco-Friendly"
              className="w-full h-72 object-cover rounded-lg shadow-md border-2 border-amber-200"
            />
            <img
              src="https://images.unsplash.com/photo-1544441893-675973e31985?w=400&h=500&fit=crop"
              alt="Accesorios Sostenibles"
              className="w-full h-72 object-cover rounded-lg shadow-md border-2 border-amber-200"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-gradient-to-r from-amber-100 to-stone-200 rounded-xl p-8 mb-10">
          <h3 className="text-2xl font-bold text-amber-900 mb-6 text-center">
            Nuestros Valores Fundamentales
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-amber-50 rounded-lg border border-amber-200">
              <img
                src="https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?w=400&h=200&fit=crop"
                alt="Sostenibilidad"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h4 className="font-semibold text-amber-900 mb-2">Sostenibilidad Total</h4>
              <p className="text-amber-800 text-sm">
                Utilizamos exclusivamente materiales orgánicos certificados: algodón GOTS,
                lino europeo, tencel de eucalipto y lana merino responsable. Nuestros
                procesos de tintura utilizan tintes naturales y reciclamos el 95% del agua.
              </p>
            </div>
            <div className="text-center p-6 bg-stone-50 rounded-lg border border-amber-200">
              <img
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=200&fit=crop"
                alt="Comercio Justo"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h4 className="font-semibold text-amber-900 mb-2">Comercio Justo</h4>
              <p className="text-amber-800 text-sm">
                Trabajamos directamente con cooperativas textiles familiares en Perú, India
                y Guatemala, garantizando salarios dignos 40% superiores al promedio local.
                Mantenemos relaciones comerciales a largo plazo basadas en la confianza mutua.
              </p>
            </div>
            <div className="text-center p-6 bg-amber-50 rounded-lg border border-amber-200">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=200&fit=crop"
                alt="Calidad Artesanal"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h4 className="font-semibold text-amber-900 mb-2">Calidad Artesanal</h4>
              <p className="text-amber-800 text-sm">
                Cada prenda pasa por un control de calidad de 15 puntos. Trabajamos con
                artesanos especializados que dominan técnicas tradicionales transmitidas
                por generaciones, combinándolas con tecnología moderna de confección.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-stone-50 rounded-xl p-8 mb-10 border border-amber-200">
          <SubTitle text="Nuestra Misión y Visión"/>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500&h=300&fit=crop"
                alt="Moda Consciente"
                className="w-full h-48 object-cover rounded-lg mb-4 border-2 border-amber-200"
              />
              <h4 className="font-semibold text-amber-900 mb-3">Moda Consciente para Todos</h4>
              <p className="text-amber-800 mb-4">
                Demostramos que es posible vestirse con estilo mientras cuidamos nuestro planeta.
                Cada colección cuenta una historia de respeto hacia la naturaleza y las comunidades
                que hacen posible nuestra ropa. Nuestro objetivo es reducir la huella de carbono
                de la industria textil en un 50% para 2030.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=500&h=300&fit=crop"
                alt="Comunidad Global"
                className="w-full h-48 object-cover rounded-lg mb-4 border-2 border-amber-200"
              />
              <h4 className="font-semibold text-amber-900 mb-3">Comunidad Global EcoVision</h4>
              <p className="text-amber-800 mb-4">
                Conectamos a más de 50,000 consumidores conscientes en 12 países con artesanos
                talentosos alrededor del mundo. Nuestra red de comercio justo beneficia
                directamente a 200 familias productoras y genera empleo digno en comunidades rurales.
              </p>
            </div>
          </div>
        </div>

        {/* Collections Section */}
        <div className="bg-gradient-to-r from-stone-100 to-amber-100 rounded-xl p-8 mb-10">
          <SubTitle text="Nuestras Colecciones Destacadas"/>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <img
                src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&h=400&fit=crop"
                alt="Colección Orgánica"
                className="w-full h-64 object-cover rounded-lg mb-4 border-2 border-amber-200"
              />
              <h5 className="font-semibold text-amber-900 mb-2">Línea Essential Organic</h5>
              <p className="text-amber-800 text-sm">
                Básicos atemporales confeccionados en algodón orgánico certificado GOTS.
                Perfectos para el día a día, combinan comodidad, durabilidad y estilo minimalista.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=500&h=400&fit=crop"
                alt="Colección Premium"
                className="w-full h-64 object-cover rounded-lg mb-4 border-2 border-amber-200"
              />
              <h5 className="font-semibold text-amber-900 mb-2">Premium Artisan Collection</h5>
              <p className="text-amber-800 text-sm">
                Piezas únicas tejidas a mano por maestros artesanos peruanos. Cada prenda
                incluye una tarjeta con la historia del artesano que la creó.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-amber-200">
              <img
                src="https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=200&h=150&fit=crop"
                alt="Algodón Orgánico"
                className="w-full h-24 object-cover rounded-lg mb-2"
              />
              <h5 className="font-medium text-amber-900 text-sm">Algodón Orgánico</h5>
              <p className="text-xs text-amber-800">Suave y transpirable</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-amber-200">
              <img
                src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=200&h=150&fit=crop"
                alt="Bambú Premium"
                className="w-full h-24 object-cover rounded-lg mb-2"
              />
              <h5 className="font-medium text-amber-900 text-sm">Bambú Premium</h5>
              <p className="text-xs text-amber-800">Antibacterial natural</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-amber-200">
              <img
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=150&fit=crop"
                alt="Tencel Reciclado"
                className="w-full h-24 object-cover rounded-lg mb-2"
              />
              <h5 className="font-medium text-amber-900 text-sm">Tencel Reciclado</h5>
              <p className="text-xs text-amber-800">Fibra de eucalipto</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-amber-200">
              <img
                src="https://th.bing.com/th/id/OIP.QNyDwBtoARKj3BwY48CjmwHaE8?r=0&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3"
                alt="Lino Europeo"
                className="w-full h-24 object-cover rounded-lg mb-2"
              />
              <h5 className="font-medium text-amber-900 text-sm">Lino Europeo</h5>
              <p className="text-xs text-amber-800">Cultivo responsable</p>
            </div>
          </div>
        </div>

        {/* Impact Section */}
        <div className="bg-amber-100 rounded-xl p-8 mb-10">
          <SubTitle text="Nuestro Impacto Ambiental"/>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-white rounded-lg">
              <h4 className="text-2xl font-bold text-amber-900">2.5M</h4>
              <p className="text-amber-800 font-medium">Litros de agua ahorrados</p>
              <p className="text-xs text-amber-700">Gracias a nuestros procesos de reciclaje</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <h4 className="text-2xl font-bold text-amber-900">15,000</h4>
              <p className="text-amber-800 font-medium">Árboles plantados</p>
              <p className="text-xs text-amber-700">Programa de reforestación anual</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <h4 className="text-2xl font-bold text-amber-900">85%</h4>
              <p className="text-amber-800 font-medium">Reducción CO2</p>
              <p className="text-xs text-amber-700">Comparado con producción convencional</p>
            </div>
          </div>
        </div>

        {/* Commitment Section */}
        <div className="text-center bg-stone-50 rounded-xl p-8 border border-amber-200">
          <h3 className="text-2xl font-bold text-amber-900 mb-4">Nuestro Compromiso Contigo</h3>
          <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
            <img
              src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=400&h=300&fit=crop"
              alt="Compromiso EcoVision"
              className="w-full md:w-1/3 rounded-lg border-2 border-amber-200"
            />
            <div className="md:w-2/3 text-left">
              <p className="text-amber-800 leading-relaxed mb-4">
                En EcoVision nos esforzamos cada día para brindarte prendas de calidad superior,
                envíos carbono-neutral y una experiencia de compra consciente y satisfactoria.
                Fernando y su equipo revisan personalmente cada pedido antes del envío.
              </p>
              <p className="text-amber-800 leading-relaxed">
                Porque creemos que la moda sostenible debe ser una experiencia completa que
                despierte todos tus sentidos y te haga sentir bien contigo mismo y con el mundo.
                Cada compra contribuye directamente a nuestros programas de impacto social.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4 text-sm">
            <div className="bg-amber-200 px-4 py-3 rounded-full">
              <span className="text-amber-900 font-medium">Envío Carbono Neutral</span>
            </div>
            <div className="bg-stone-200 px-4 py-3 rounded-full">
              <span className="text-amber-900 font-medium">Packaging 100% Biodegradable</span>
            </div>
            <div className="bg-amber-200 px-4 py-3 rounded-full">
              <span className="text-amber-900 font-medium">Programa de Reciclaje</span>
            </div>
            <div className="bg-stone-200 px-4 py-3 rounded-full">
              <span className="text-amber-900 font-medium">Garantía de por Vida</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;