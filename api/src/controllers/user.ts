import { Request, Response } from 'express';
import userService from '../services/user';

class UserController {
  public async createUser(req: Request, res: Response): Promise<void> {
    try {
      const user = await userService.createUser(req.body);
      res.status(201).json(user);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  public async getUsers(req: Request, res: Response): Promise<void> {
    console.warn(req.body);
    try {
      const users = await userService.getUsers();
      res.json(users);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  public async getUserById(req: Request, res: Response): Promise<void> {
    if (!req.params.id) {
      res.status(400).json({ error: 'User id not found' });
      return;
    }
    try {
      const user = await userService.getUserById(req.params.id);
      if (!user) {
        res.status(404).json({ error: 'User not found' });
        return;
      }
      res.json(user);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  public async updateUser(req: Request, res: Response): Promise<void> {
    if (!req.params.id) {
      res.status(400).json({ error: 'User id not found' });
      return;
    }
    try {
      const response = await userService.updateUser(req.params.id, req.body);
      res.json({ message: 'User Updated', response });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  public async deleteUser(req: Request, res: Response): Promise<void> {
    if (!req.params.id) {
      res.status(400).json({ error: 'User id not found' });
      return;
    }
    try {
      const response = await userService.deleteUser(req.params.id);
      res.json({ message: 'User removed', response });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

export default new UserController();
