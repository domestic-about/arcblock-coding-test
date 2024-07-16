// eslint-disable-next-line import/no-extraneous-dependencies
import PouchDB from 'pouchdb';
import { User } from '../types/user';

class UserService {
  private db: PouchDB.Database<User>;

  constructor() {
    this.db = new PouchDB('users');
  }

  public async createUser(user: User): Promise<PouchDB.Core.Response> {
    const response = await this.db.put({ ...user, _id: new Date().toISOString() });

    return response;
  }

  public async getUsers(): Promise<User[]> {
    const result = await this.db.allDocs({ include_docs: true });
    return result.rows.map((row) => row?.doc as User);
  }

  public async getUserById(id: string): Promise<User | null> {
    try {
      const user = await this.db.get(id);
      return user;
    } catch (error) {
      if (error.status === 404) {
        return null;
      }
      throw error;
    }
  }

  public async updateUser(id: string, user: Partial<User>): Promise<PouchDB.Core.Response> {
    const existingUser = await this.db.get(id);
    const response = await this.db.put({ ...existingUser, ...user });
    return response;
  }

  public async deleteUser(id: string): Promise<PouchDB.Core.Response> {
    const user = await this.db.get(id);
    const response = await this.db.remove(user);
    return response;
  }
}

export default new UserService();
