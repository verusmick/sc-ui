module.exports = [
  {
    type: 'item',
    isHeader: true,
    name: 'Modulos'
  },
  {
    type: 'item',
    icon: 'fa fa-users',
    name: 'Usuarios',
    badge: {
      type: 'String'
    },
    router: {
      name: 'Users'
    }
  },
  {
    type: 'tree',
    icon: 'fa fa-laptop',
    name: 'Contabilidad',
    items: [
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Cuentas',
        router: {
          name: 'Users'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Transacciones',
        router: {
          name: 'Users'
        }
      }
    ]
  }
]
