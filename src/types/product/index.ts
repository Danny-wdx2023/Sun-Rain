export type Product = {
  id: number
  name: string
  photos: string[]
  parameter: {
    botanicalName: string
    grade: string
    spec: string
  }
  slogan: string
  description: string
}

export type ProductArray = Product[]
