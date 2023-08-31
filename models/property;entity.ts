import { Model, DataTypes, Optional } from 'sequelize';
import { sequelize } from '../db';

interface IProperty {
    id: number;
    title: string;
    description: string;
    price: number;
    userID: number;
    createdAt?: Date;
    updatedAt?: Date;
}

export type PropertyCreationAttributes = Optional<IProperty, 'id'>;

export class Property extends Model<IProperty, PropertyCreationAttributes> implements IProperty {

    public id!: number;
    public title!: string;
    public description!: string;
    public price!: number;
    public userID!: number;
    public createdAt?: Date;
    public updatedAt?: Date;

}

Property.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: new DataTypes.STRING(50),
        allowNull: false
    },
    description: {
        type: new DataTypes.STRING(100),
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    userID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id'
        }
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,    }
},
{
    sequelize,
    tableName: 'properties',
    modelName: 'property'
}
);
