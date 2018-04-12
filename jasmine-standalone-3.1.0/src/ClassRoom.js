class Room extends EmployersControl {
   constructor(code = '', name = '', leader = new Employer(), employers = []) {
      super(employers);
      this.code = code;
      this.name = name;
      this.leader = leader;
   }
   get code() {
      return this._code;
   }
   get name() {
      return this._name;
   }
   get leader() {
      return this._leader;
   }
   set code(input) {
      if (input.toString().search(RegExp('^\\w{2}\\d{2}$', 'i')) > -1) {
         return this._code = input;
      }
      this._code = '';
   }
   set name(input) {
      if (input.toString().search(RegExp('^[a-z\\s]+$', 'i')) > -1) {
         return this._name = input;
      }
      this._name = '';
   }
   set leader(input) {
      if (input instanceof Employer && input.position === 'Leader') {
         return this._leader = input;
      }
      this._leader = new Employer();
   }
   toString() {
      let str = '<tr>';
      for (const prop in this) {
         const element = this[prop];
         if (element instanceof Array) {
            continue;
         }
         str += '<td>' + element + '</td>';
      }
      str += '<td>' + this._employers.length + '</td>';
      str += '</tr>';
      return str;
   }

   sortByPosition() {
      let leng = this._employers.length;
      for (let i = 0; i < leng; i++) {
         for (let j = leng; j > i + 1; j--) {
            const pos = ['', 'Employer', 'Sub-Leader', 'Leader', 'Boss'];
            let element = this._employers[j - 2];
            let element1 = this._employers[j - 1];
            const indexOfj = pos.indexOf(element.position);
            const indexOfj1 = pos.indexOf(element1.position);
            if (indexOfj < indexOfj1 || (indexOfj === indexOfj1 && element.name > element1.name)) {
               let t = this._employers[j - 2];
               this._employers[j - 2] = this._employers[j - 1];
               this._employers[j - 1] = t;
            }
         }
      }
   }
}