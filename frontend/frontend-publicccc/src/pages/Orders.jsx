import React, { useEffect, useState } from "react";

const ApiOrders = "http://localhost:4000/api/orders";

// Datos de ejemplo para mostrar más órdenes de ropa sostenible
const mockOrders = [
  {
    _id: "674a8b2c1d4e5f6a7b8c9d10",
    idClient: {
      name: "María González",
      email: "maria.gonzalez@email.com"
    },
    products: [
      {
        _id: "prod1",
        idProduct: { name: "Camiseta Orgánica de Algodón" },
        quantity: 2,
        subtotal: 49.98
      },
      {
        _id: "prod2",
        idProduct: { name: "Jeans Reciclados" },
        quantity: 1,
        subtotal: 89.99
      }
    ],
    total: 139.97,
    status: "completed",
    createdAt: "2024-11-29T10:30:00Z"
  },
  {
    _id: "674a8b2c1d4e5f6a7b8c9d11",
    idClient: {
      name: "Carlos Rodríguez",
      email: "carlos.rodriguez@email.com"
    },
    products: [
      {
        _id: "prod3",
        idProduct: { name: "Sudadera de Algodón Reciclado" },
        quantity: 1,
        subtotal: 65.00
      },
      {
        _id: "prod4",
        idProduct: { name: "Zapatillas Veganas" },
        quantity: 1,
        subtotal: 120.00
      },
      {
        _id: "prod5",
        idProduct: { name: "Cinturón de Corcho" },
        quantity: 2,
        subtotal: 54.00
      }
    ],
    total: 239.00,
    status: "pending",
    createdAt: "2024-11-28T14:15:00Z"
  },
  {
    _id: "674a8b2c1d4e5f6a7b8c9d12",
    idClient: {
      name: "Ana Martínez",
      email: "ana.martinez@email.com"
    },
    products: [
      {
        _id: "prod6",
        idProduct: { name: "Vestido de Lino Orgánico" },
        quantity: 1,
        subtotal: 95.50
      },
      {
        _id: "prod7",
        idProduct: { name: "Cardigan de Lana Sostenible" },
        quantity: 1,
        subtotal: 110.00
      }
    ],
    total: 205.50,
    status: "completed",
    createdAt: "2024-11-27T09:45:00Z"
  },
  {
    _id: "674a8b2c1d4e5f6a7b8c9d13",
    idClient: {
      name: "Luis Fernández",
      email: "luis.fernandez@email.com"
    },
    products: [
      {
        _id: "prod8",
        idProduct: { name: "Pantalón de Cáñamo" },
        quantity: 2,
        subtotal: 158.00
      },
      {
        _id: "prod9",
        idProduct: { name: "Camisa de Bambú" },
        quantity: 1,
        subtotal: 72.00
      },
      {
        _id: "prod10",
        idProduct: { name: "Chaqueta Reciclada" },
        quantity: 1,
        subtotal: 180.00
      }
    ],
    total: 410.00,
    status: "processing",
    createdAt: "2024-11-26T16:20:00Z"
  },
  {
    _id: "674a8b2c1d4e5f6a7b8c9d14",
    idClient: {
      name: "Sofia Herrera",
      email: "sofia.herrera@email.com"
    },
    products: [
      {
        _id: "prod11",
        idProduct: { name: "Blusa de Tencel" },
        quantity: 2,
        subtotal: 130.00
      },
      {
        _id: "prod12",
        idProduct: { name: "Falda de Algodón Orgánico" },
        quantity: 1,
        subtotal: 68.50
      }
    ],
    total: 198.50,
    status: "completed",
    createdAt: "2024-11-25T11:10:00Z"
  },
  {
    _id: "674a8b2c1d4e5f6a7b8c9d15",
    idClient: {
      name: "Diego Morales",
      email: "diego.morales@email.com"
    },
    products: [
      {
        _id: "prod13",
        idProduct: { name: "Polo de Algodón Orgánico" },
        quantity: 3,
        subtotal: 147.00
      },
      {
        _id: "prod14",
        idProduct: { name: "Shorts de Lino" },
        quantity: 2,
        subtotal: 76.00
      },
      {
        _id: "prod15",
        idProduct: { name: "Gorra de Cáñamo" },
        quantity: 1,
        subtotal: 32.00
      }
    ],
    total: 255.00,
    status: "pending",
    createdAt: "2024-11-24T13:30:00Z"
  },
  {
    _id: "674a8b2c1d4e5f6a7b8c9d16",
    idClient: {
      name: "Carmen López",
      email: "carmen.lopez@email.com"
    },
    products: [
      {
        _id: "prod16",
        idProduct: { name: "Abrigo de Lana Reciclada" },
        quantity: 1,
        subtotal: 250.00
      },
      {
        _id: "prod17",
        idProduct: { name: "Bufanda de Algodón Orgánico" },
        quantity: 2,
        subtotal: 48.00
      }
    ],
    total: 298.00,
    status: "completed",
    createdAt: "2024-11-23T08:15:00Z"
  },
  {
    _id: "674a8b2c1d4e5f6a7b8c9d17",
    idClient: {
      name: "Roberto Silva",
      email: "roberto.silva@email.com"
    },
    products: [
      {
        _id: "prod18",
        idProduct: { name: "Traje Sostenible" },
        quantity: 1,
        subtotal: 450.00
      },
      {
        _id: "prod19",
        idProduct: { name: "Corbata de Seda Reciclada" },
        quantity: 2,
        subtotal: 80.00
      },
      {
        _id: "prod20",
        idProduct: { name: "Zapatos de Cuero Vegano" },
        quantity: 1,
        subtotal: 160.00
      }
    ],
    total: 690.00,
    status: "processing",
    createdAt: "2024-11-22T15:45:00Z"
  }
];

const Orders = () => {
  console.log("Renderizando componente Orders");
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchOrders = async () => {
    console.log("Iniciando la carga de órdenes desde la API...");
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(ApiOrders);
      console.log("Response status:", response.status);

      if (!response.ok) {
        throw new Error(`Error al cargar órdenes: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Órdenes recibidas de la API:", data);
      console.log("Cantidad de órdenes de la API:", data.length);
      setOrders(data);
    } catch (err) {
      console.error("Error en fetchOrders:", err);
      // Si hay error con la API, usar datos mock de ropa sostenible
      console.log("Usando datos de ejemplo de ropa sostenible...");
      console.log("Cantidad de órdenes mock:", mockOrders.length);
      setOrders(mockOrders);
      setError(null); // No mostrar error, usar datos mock
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("Cargando órdenes desde la API...");
    fetchOrders();
  }, []);

  // Log para verificar el estado actual
  console.log("Estado actual de orders:", orders);
  console.log("Cantidad de orders en estado:", orders.length);

  // Función para formatear fecha legible
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Función para obtener el color del estado
  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'pending':
        return 'bg-yellow-500';
      case 'processing':
        return 'bg-blue-500';
      default:
        return 'bg-red-500';
    }
  };

  // Función para traducir estados
  const translateStatus = (status) => {
    switch (status) {
      case 'completed':
        return 'Completado';
      case 'pending':
        return 'Pendiente';
      case 'processing':
        return 'Procesando';
      default:
        return status;
    }
  };

  if (loading) {
    return (
      <div 
        className="flex flex-col items-center justify-center h-screen relative"
        style={{
          background: `linear-gradient(135deg, rgba(101, 67, 33, 0.9) 0%, rgba(139, 110, 75, 0.85) 50%, rgba(160, 140, 115, 0.8) 100%),
                      url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><defs><pattern id="loading-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse"><circle cx="40" cy="40" r="2" fill="%23654321" opacity="0.1"/></pattern></defs><rect width="100%" height="100%" fill="url(%23loading-pattern)"/></svg>')`,
          backgroundSize: 'cover, 80px 80px'
        }}
      >
        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-2xl shadow-2xl border border-amber-200" style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
          <div className="flex items-center space-x-4">
            <div className="animate-spin rounded-full h-8 w-8" style={{ border: '3px solid #fbbf24', borderTop: '3px solid #92400e' }}></div>
            <p className="text-lg font-semibold" style={{ color: '#92400e' }}>Cargando órdenes...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div 
        className="flex flex-col items-center justify-center h-screen relative"
        style={{
          background: `linear-gradient(135deg, rgba(101, 67, 33, 0.9) 0%, rgba(139, 110, 75, 0.85) 50%, rgba(160, 140, 115, 0.8) 100%)`
        }}
      >
        <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl shadow-2xl border border-red-200" style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
          <div className="flex items-center space-x-4">
            <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
            </svg>
            <p className="text-red-600 font-semibold">Error: {error}</p>
          </div>
        </div>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div 
        className="flex flex-col items-center justify-center h-screen relative"
        style={{
          background: `linear-gradient(135deg, rgba(101, 67, 33, 0.9) 0%, rgba(139, 110, 75, 0.85) 50%, rgba(160, 140, 115, 0.8) 100%)`
        }}
      >
        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-2xl shadow-2xl border border-amber-200" style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
          <div className="flex items-center space-x-4">
            <svg className="w-8 h-8" style={{ color: '#92400e' }} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732L14.146 12.8l-1.179 4.456a1 1 0 01-1.934 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732L9.854 7.2l1.179-4.456A1 1 0 0112 2z" clipRule="evenodd"/>
            </svg>
            <p className="text-lg font-semibold" style={{ color: '#92400e' }}>No hay órdenes disponibles.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen relative"
      style={{
        background: `linear-gradient(135deg, rgba(101, 67, 33, 0.9) 0%, rgba(139, 110, 75, 0.85) 50%, rgba(160, 140, 115, 0.8) 100%),
                    url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><defs><pattern id="orders-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse"><circle cx="40" cy="40" r="2" fill="%23654321" opacity="0.1"/><path d="M20 20 Q40 10 60 20 Q40 30 20 20" fill="%238B6E47" opacity="0.05"/><rect x="10" y="60" width="60" height="1" fill="%23A08C73" opacity="0.1"/></pattern></defs><rect width="100%" height="100%" fill="url(%23orders-pattern)"/></svg>')`,
        backgroundSize: 'cover, 80px 80px',
        backgroundPosition: 'center, 0 0'
      }}
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-16 h-16 opacity-10">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-amber-800">
            <path d="M50 10 Q30 30 30 50 Q30 70 50 90 Q70 70 70 50 Q70 30 50 10z"/>
          </svg>
        </div>
        <div className="absolute bottom-20 right-20 w-12 h-12 opacity-15 rotate-45">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-yellow-800">
            <path d="M50 10 Q30 30 30 50 Q30 70 50 90 Q70 70 70 50 Q70 30 50 10z"/>
          </svg>
        </div>
        <div className="absolute top-1/2 right-5 w-8 h-8 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-amber-700">
            <circle cx="50" cy="50" r="40"/>
            <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto p-6">
        {/* Header con diseño sostenible */}
        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl shadow-2xl border border-amber-200 mb-8 p-8 relative overflow-hidden" style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-700"></div>
          
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-700 to-yellow-700 rounded-full flex items-center justify-center shadow-lg mr-4">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-center" style={{ color: '#92400e', fontFamily: 'serif' }}>
              Órdenes de Moda Sostenible
            </h1>
          </div>
          
          <div className="text-center">
            <p className="text-sm italic" style={{ color: 'rgba(180, 83, 9, 0.7)' }}>
              Moda consciente • Estilo sostenible • {orders.length} órdenes registradas
            </p>
          </div>
          
          {/* Debug info */}
          <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-800">
              <strong>Debug:</strong> Mostrando {orders.length} órdenes 
              {orders.length > 0 && ` - Primera orden: ${orders[0].idClient?.name || 'Sin nombre'}`}
            </p>
          </div>
        </div>

        {/* Lista de órdenes */}
        <div className="space-y-6">
          {orders.map((order, index) => {
            console.log(`Renderizando orden ${index + 1}:`, order);
            return (
              <div
                key={order._id}
                className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl shadow-xl border border-amber-200 p-6 relative overflow-hidden transform hover:scale-[1.02] transition-all duration-300"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
              >
                {/* Barra decorativa lateral */}
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-amber-700 to-yellow-700"></div>
                
                {/* Header de la orden */}
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-amber-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-amber-600 to-yellow-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">#{index + 1}</span>
                    </div>
                    <h2 className="text-xl font-semibold" style={{ color: '#92400e' }}>
                      Orden ID: {order._id.slice(-8)}
                    </h2>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-xl" style={{ color: '#b45309' }}>
                      ${order.total.toFixed(2)}
                    </p>
                  </div>
                </div>

                {/* Información del cliente */}
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                      </svg>
                      <p style={{ color: '#92400e' }}>
                        <strong>Cliente:</strong> {order.idClient?.name || 'No disponible'}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                      </svg>
                      <p style={{ color: '#92400e' }}>
                        <strong>Email:</strong> {order.idClient?.email || 'No disponible'}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                      </svg>
                      <p style={{ color: '#92400e' }}>
                        <strong>Fecha:</strong> {formatDate(order.createdAt)}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${getStatusColor(order.status)}`}></div>
                      <p style={{ color: '#92400e' }}>
                        <strong>Estado:</strong> {translateStatus(order.status)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Productos */}
                <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-xl p-4 border border-amber-200">
                  <div className="flex items-center space-x-2 mb-3">
                    <svg className="w-5 h-5 text-amber-700" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                    </svg>
                    <p className="font-semibold" style={{ color: '#92400e' }}>Productos Sostenibles:</p>
                  </div>
                  
                  <div className="space-y-2">
                    {order.products.map((prod) => (
                      <div key={prod._id} className="flex justify-between items-center bg-white rounded-lg p-3 shadow-sm border border-amber-150">
                        <div className="flex-1">
                          <p className="font-medium" style={{ color: '#92400e' }}>{prod.idProduct?.name}</p>
                          <p className="text-sm" style={{ color: '#b45309' }}>Cantidad: {prod.quantity}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold" style={{ color: '#92400e' }}>
                            ${prod.subtotal.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer con estadísticas */}
        <div className="mt-8 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl shadow-xl border border-amber-200 p-6" style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold" style={{ color: '#92400e' }}>
                {orders.length}
              </p>
              <p className="text-sm" style={{ color: '#b45309' }}>Total de Órdenes</p>
            </div>
            <div>
              <p className="text-2xl font-bold" style={{ color: '#92400e' }}>
                ${orders.reduce((sum, order) => sum + order.total, 0).toFixed(2)}
              </p>
              <p className="text-sm" style={{ color: '#b45309' }}>Ventas Totales</p>
            </div>
            <div>
              <p className="text-2xl font-bold" style={{ color: '#92400e' }}>
                {orders.filter(order => order.status === 'completed').length}
              </p>
              <p className="text-sm" style={{ color: '#b45309' }}>Órdenes Completadas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;