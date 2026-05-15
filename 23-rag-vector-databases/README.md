# RAG and Vector Databases with AI

Retrieval-Augmented Generation (RAG) combines LLMs with external knowledge bases for accurate, up-to-date responses.

## Table of Contents
- [Understanding RAG](#understanding-rag)
- [Vector Databases](#vector-databases)
- [Embeddings](#embeddings)
- [Building RAG Systems](#building-rag-systems)
- [Advanced Techniques](#advanced-techniques)
- [Evaluation](#evaluation)
- [Production Considerations](#production-considerations)
- [Prompts for RAG](#prompts-for-rag)
- [Practice Projects](#practice-projects)

## Understanding RAG

### What is RAG?

RAG = Retrieval + Generation
1. **Retrieve** relevant documents from knowledge base
2. **Augment** the prompt with retrieved context
3. **Generate** answer using LLM with context

### When to Use RAG

- Domain-specific knowledge not in training data
- Frequently changing information
- Need for source citations
- Reducing hallucinations
- Cost optimization (smaller models with context)

## Vector Databases

### Popular Options

| Database | Type | Best For | Pricing |
|----------|------|----------|---------|
| Pinecone | Managed | Production, ease of use | Paid |
| Weaviate | Open-source | Flexibility, GraphQL | Free/Paid |
| Chroma | Open-source | Local development | Free |
| Qdrant | Open-source | Performance, filtering | Free/Paid |
| Milvus | Open-source | Large scale | Free |
| pgvector | PostgreSQL extension | Existing Postgres users | Free |

### Setup Examples

```
Prompt: "Set up ChromaDB for document storage:
1. Initialize collection
2. Add documents with metadata
3. Configure embedding function
4. Implement similarity search
5. Handle updates and deletions"
```

## Embeddings

### Choosing Embedding Models

```
Prompt: "Compare embedding models for RAG:
- text-embedding-ada-002 (OpenAI)
- embeddings (Cohere)
- all-MiniLM-L6-v2 (Sentence Transformers)
- bge-large (BAAI)

Consider: quality, speed, cost, dimensions."
```

### Embedding Strategies

- Chunk documents appropriately (256-512 tokens)
- Overlap chunks for context continuity
- Store metadata for filtering
- Normalize vectors for cosine similarity

## Building RAG Systems

### Basic RAG Pipeline

```
Prompt: "Build end-to-end RAG system:
1. Document loading (PDF, web, database)
2. Text splitting with smart chunking
3. Embedding generation
4. Vector storage
5. Retrieval with filtering
6. Prompt augmentation
7. Response generation
8. Source citation"
```

### Advanced Retrieval

```
Prompt: "Implement hybrid search:
- Dense vector similarity
- Sparse keyword matching (BM25)
- Reciprocal Rank Fusion
- Metadata filtering
- Time-decay scoring"
```

## Advanced Techniques

### Query Transformation

```
Prompt: "Add query enhancement:
- Query expansion (synonyms, related terms)
- Step-back prompting (generate broader query)
- HyDE (Hypothetical Document Embeddings)
- Multi-query retrieval"
```

### RAG Fusion

```
Prompt: "Implement RAG-Fusion:
1. Generate multiple queries from original
2. Retrieve documents for each
3. Reciprocal rank fusion
4. Re-rank results
5. Generate final answer"
```

### Self-RAG

```
Prompt: "Add self-reflection to RAG:
- Critique retrieved documents
- Assess relevance scores
- Generate reflection tokens
- Iterative retrieval if needed"
```

## Evaluation

### Metrics

```
Prompt: "Define RAG evaluation metrics:
- Context precision
- Context recall
- Answer relevance
- Faithfulness (groundedness)
- End-to-end accuracy"
```

### Testing Framework

```
Prompt: "Create evaluation dataset:
- Question-answer pairs
- Expected sources
- Edge cases
- Adversarial examples
- Performance benchmarks"
```

## Production Considerations

### Scaling

```
Prompt: "Plan for production scale:
- Index sharding strategies
- Caching frequent queries
- Async retrieval pipelines
- Rate limiting
- Monitoring and alerting"
```

### Security

```
Prompt: "Implement RAG security:
- Access control for documents
- Query sanitization
- PII detection and redaction
- Audit logging
- Data encryption"
```

## Prompts for RAG

### Debugging RAG

```
Prompt: "Debug poor RAG performance:
'Retrieved documents are irrelevant to queries'

Analyze:
1. Embedding quality
2. Chunk size appropriateness
3. Query formulation
4. Similarity threshold
5. Metadata filtering"
```

### Optimization

```
Prompt: "Optimize RAG latency:
Current: 3s response time
Target: <1s

Suggest improvements in:
- Embedding caching
- Parallel retrieval
- Model selection
- Infrastructure"
```

## Practice Projects

1. **Documentation Chatbot**: Company docs Q&A
2. **Legal Research Assistant**: Case law retrieval
3. **Medical Information System**: Research paper Q&A (with disclaimers)
4. **Codebase Assistant**: Repository documentation
5. **News Analysis**: Real-time news with sources

---

## Conclusion

RAG bridges the gap between LLMs and specific knowledge. Start simple, measure rigorously, and iterate based on user feedback.
