import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('radio')

export class RadioEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    paqueteDatos: string;
}
