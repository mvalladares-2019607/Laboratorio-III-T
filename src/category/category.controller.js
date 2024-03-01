'use strict';

import Category from './category';

export const addCategory = async (req, res) =>{
    try {
        const data = req.body;
        console.log(data);
        const category = new Category(data);
        await category.save();
        return res.send({message: `Registered successfully`});
    } catch (error) {
        console.error(error);
        return res.status(500).send({message: 'Faild add category '});
    }
};

export const updatedCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const updatedCategory = await Category.findOneAndUpdate(
            {_id: id},
            data,
            {new: true}
            );
        if(!updatedCategory) return res.status(404).send({message: ' Category not found'});
        return res.send({message: 'Category  updated'});
    } catch (error) {
        console.error(error);
        return res.status(500).send({message: 'Faild update'});
    }
};

export const getCategories = async (req, res) => {
    try {
        const category = await Category.find();
        return res.send({category});
    } catch (error) {
        console.error(error);
        return res.status(500).send({message: 'not found'});
    }
};

export const findCategoryID = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await Category.find(
            {_id: id}
        );
        return res.send({category});
    } catch (error) {
        console.error(error);
        return res.status(500).send({message: ' Category not found'});
    }
};

export const deleteCategory = async (req, res) =>{
    try {
        const {id} = req.params;
        const deletedCategory =  await Category.findOneAndDelete({_id: id});
        if(!deletedCategory) return res.status(404).send({message: 'Category not found'});
        return res.send({message: `Category deleted successfully`});
    } catch (error) {
        console.error(error);
        return res.status(500).send({message: 'Faild delete Category'});
    }

};
