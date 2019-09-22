import axios from "axios";

class BackService {
  constructor() {
    let service = axios.create({
      baseURL: 'https://api-openhack.now.sh',
      withCredentials: true
    });
    this.service = service;
  }

  cadastrar(email ,name, experience, interest, area, programmingLanguage, github) {
    const tech_info = {
      programmingLanguage: programmingLanguage,
      experience: experience,
      area: area,
      interest: interest
    }
    return this.service
      .create("/user", {
        name,
        email,
        tech_info,
        github
      })
      .then(response => response.data)
      .catch(err => console.log(err));
  }
}

export default BackService;
