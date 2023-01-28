import fs from 'fs';

export class Service {
  constructor() {}

  register(body: any) {
    const objectToSet: any = {
      username: body.username,
      email: body.email,
      name: body.name,
      password: body.password,
      firstName: body.firstName,
      lastName: body.lastName,
      mobileNumber: body.mobileNumber,
      country: body.country,
      gender: body.gender,
      dateOfBirth: body.dateOfBirth,
      nationality: body.nationality,
      language: body.language,
      accessType: body.accessType,
      loginType: body.loginType,
      id: body.id,
    };
    const fileName = this.generateRandom8Bit().toString();
    const file = `src/db/${fileName}.json`;
    fs.writeFile(file, JSON.stringify(objectToSet), (err) => {
      if (err) {
        console.error(err);
      }
    });
    const token = this.generateRandom8Bit().toString();
    return {
      serverDate: new Date(),
      message: 'success',
      result: {
        verificationToken: token,
      },
    };
  }
  secondRoute(body: any) {
    const obj: any = {
      verfificationToken: body.verfificationToken,
      otp: body.otp,
    };
    console.log(`obj sent in second route is ${JSON.stringify(obj)}`);
    return {
      serverDate: new Date(),
      message: 'success',
    };
  }
  generateRandom8Bit() {
    return Math.floor(Math.random() * 256)
      .toString(2)
      .padStart(8, '0');
  }
}
