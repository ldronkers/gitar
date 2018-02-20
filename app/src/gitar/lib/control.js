class MenuItem {

  static TYPE_SCALE = '0';
  static TYPE_INTERVAL = '1';

  constructor(type) {
    this.type = type;
  }
}

class ScalesMenuItem extends MenuItem {
  constructor(selection) {
    super(MenuItem.TYPE_SCALE)
    this.selection = selection;
  }
}

class IntervalsMenuItem extends MenuItem {
  constructor(selection) {
    super(MenuItem.TYPE_INTERVAL)
    this.selection = selection;
  }
}

export { MenuItem, ScalesMenuItem, IntervalsMenuItem };
