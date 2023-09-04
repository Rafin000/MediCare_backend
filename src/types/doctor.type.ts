export type IDoctor = {
  id: string,
  phoneNumber: string,
  biography: string | null,
  isActive: boolean,
  registrationId: string,
  chamberLocation: string | null,
  workExperience: string | null
}