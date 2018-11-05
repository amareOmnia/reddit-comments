initial_query = '''SELECT body,link_id,parent_id 
FROM [fh-bigquery:reddit_comments.2017_04] 
WHERE score>6 
AND body!='[removed]' 
AND body!='[deleted]' 
LIMIT 300'''