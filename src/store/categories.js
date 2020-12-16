import { makeAutoObservable } from 'mobx'

class Categories {
  categories = [
    { id: 0, title: 'Все', value: 'all', active: false },
    { id: 1, title: 'Личное', value: 'personal', active: false },
    { id: 2, title: 'Работа', value: 'work', active: false },
    { id: 3, title: 'Учёба', value: 'learn', active: false },
    { id: 4, title: 'Выполненые', value: 'complition', active: false },
  ]

  constructor() {
    makeAutoObservable(this) 
  }

  setActive(id) {
    this.categories = this.categories.map(category => category.id === id ? category.active = { ...category, active: true} : category.active = { ...category, active: false})
  }
}

export default new Categories()
