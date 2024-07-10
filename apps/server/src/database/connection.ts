import { DatabaseConfig } from '@/configs/database'
import { DataSource } from 'typeorm'

export const connection = new DataSource(DatabaseConfig)
