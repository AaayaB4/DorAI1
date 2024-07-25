from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np

model = SentenceTransformer("dunzhang/stella_en_400M_v5", trust_remote_code=True).cuda()


def get_sentence_embeddings(text):
    sentences = text.split("\n")
    embeddings = model.encode(sentences, prompt_name="s2p_query")
    return np.mean(embeddings, axis=0)


def calculate_similarity(resume, job_description):
    resume_embedding = get_sentence_embeddings(resume)
    job_description_embedding = get_sentence_embeddings(job_description)
    cosine_sim = cosine_similarity([resume_embedding], [job_description_embedding])
    return round(cosine_sim[0][0] * 100, 2)
