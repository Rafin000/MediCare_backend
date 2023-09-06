export type IHospital = {
  id: string,
  registrationId: string,
  type: string,
  name: string,
  phone: string | null,
  email: string,
  fax: string | null,
  clinicHour: string | null,
  labHour: string | null,
  description: string | null
}

export type IHospitalCreateDto = {
  registration_id: string,
  type: string,
  name: string,
  phone_number: string | null,
  email: string,
  fax: string | null,
  clinic_hour: string | null,
  lab_hour: string | null,
  description: string | null
}