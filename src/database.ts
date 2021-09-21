import mongoose from 'mongoose';
import Debugger from './utils/debugger';

export default class Database {
  public static init = async (mongoUri: string): Promise<boolean> => {
    try {
      await mongoose.connect(mongoUri);
      Debugger.log('데이터베이스 연결 성공');
      return true;
    } catch (error) {
      Debugger.error(error);
      throw new Error('mongoDB 연결에 에러가 발생했습니다.');
    }
  };
}
