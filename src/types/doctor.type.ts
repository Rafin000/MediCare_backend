export type IDoctor = {
  id: string,
  phoneNumber: string | null,
  biography: string | null,
  isActive: boolean,
  registrationId: string,
  chamberLocation: string | null,
  workExperience: string | null
}