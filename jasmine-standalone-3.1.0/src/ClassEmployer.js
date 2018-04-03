class Employer {
      constructor(code = '', name = '', birth = '', position = '') {
            this.code = code;
            this.name = name;
            this.birth = birth;
            this.position = position;
      }
      get code() {
            return this._code;
      }
      get name() {
            return this._name;
      }
      get birth() {
            return this._birth;
      }
      get position() {
            return this._position;
      }
      set code(input) {
            if (input.toString().search(RegExp('^\\w{2}\\d{4}$', 'i')) > -1) {
                  return this._code = input;
            }
            return this._code = '';
      }
      set name(input) {
            if (input.toString().search(RegExp('^[a-z\\s]+$', 'i')) > -1) {
                  return this._name = input;
            }
            return this._name = '';
      }
      set birth(input) {
            this._birth = input;
      }
      set position(input) {
            if (input === 'Boss' || input === 'Leader' || input === 'Sub-Leader' || input === 'Employer') {
                  return this._position = input;
            }
            return this._position = '';
      }
      
      getSalary() {
            const SALARY_DEFAULT = 500;
            switch (this._position) {
                  case 'Boss': return SALARY_DEFAULT * 1.25;
                  case 'Leader': return SALARY_DEFAULT * 1.15;
                  case 'Sub-Leader': return SALARY_DEFAULT * 1.05;
                  case 'Employer': return 500;
            }
      }
      
      toString() {
            return this._code + ';' + this._name + ';' + this._birth + ';' + this._position;
      }
      toStringHTML() {
            let result = '<tr>';
            for (const prop in this) {
                  if (this.hasOwnProperty(prop)) {
                        const element = this[prop];
                        result += '<td>' + element + '</td>';
                  }
            }
            result += '</tr>';
            return result;
      }

}