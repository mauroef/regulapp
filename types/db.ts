import { MouseEventHandler } from 'react'

export enum Status {
  PROJECT_RECORD = 'Proyecto de registro',
  IN_EVALUATION = 'En evaluación',
  DEADLINE_CUT = 'Corte de plaza',
  CURRENT = 'Vigente',
  NEXT_TO_DEFEAT = 'Próximo a vencer',
  WITH_RENEWAL_IN_PROCESS = 'Con renovación en trámite',
  DEFEATED = 'Vencido',
  CANCELLED = 'Cancelado',
}

export interface Record {
  id?: string
  name: string
  status: Status
  createdAt: Date
  remove?: MouseEventHandler<HTMLButtonElement>
}
