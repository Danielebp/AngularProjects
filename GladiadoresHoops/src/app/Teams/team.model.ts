export class SelectedTeam {
  public name: string;
  public accessCode: string;

  constructor (name: string, accessCode: string) {
    this.name = name;
    this.accessCode = accessCode;
  }
}

export class Team {
  public name: string;
  public accessCode: string;
  public city: string;
  public state: string;

  public coach: Coach;
  public players: Player[];

  constructor (name: string, accessCode: string, city: string, state: string, cName: string, cBirthdate: string, cCurp: string, cEmail: string, cPhone: string ) {
    this.name = name;
    this.accessCode = accessCode;
    this.city = city;
    this.state = state;

    this.coach = new Coach(cName, cBirthdate, cCurp, cEmail, cPhone);
    this.players = [];
  }

  updateCoach (name: string, birthdate: string, curp: string, email: string, phone: string) {
    this.coach = new Coach(name, birthdate, curp, email, phone);
  }

  addPlayer (name: string, birthdate: string, gender: string, position: string) {
    this.players.push(new Player(name, birthdate, gender, position));
  }
}

export class Coach {
  public name: string;
  public birthdate: string;
  public curp: string;
  public email: string;
  public phone: string;

  constructor (name: string, birthdate: string, curp: string, email: string, phone: string ) {
    this.name = name;
    this.birthdate = birthdate;
    this.curp = curp;
    this.email = email;
    this.phone = phone;
  }
}

export class Player {

  public name: string;
  public birthdate: string;
  public gender: string;
  public position: string;

  constructor (name: string, birthdate: string, gender: string, position: string) {
    this.name = name;
    this.birthdate = birthdate;
    this.gender = gender;
    this.position = position;
  }
}

