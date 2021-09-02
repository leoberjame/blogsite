import db from "../firebase/firebaseInit";

export default class Post {
  static addPost(data) {
    return db
      .collection(`posts`)
      .add({ ...data })
      .then((docRef) => {
        return docRef;
      })
      .catch(() => {
        return null;
      });
  }

  static getPostsData() {
    const posts = [];
    return db
      .collection(`posts`)
      .orderBy(`dateCreated`)
      .get()
      .then((qrySnapShot) => {
        qrySnapShot.forEach((doc) => {
          posts.push({ id: doc.id, ...doc.data() });
        });
        return { success: true, response: posts };
      })
      .catch((e) => {
        return { success: false, response: e };
      });
  }
}
