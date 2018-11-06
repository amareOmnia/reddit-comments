subTest = '''SELECT body,author,score 
FROM [fh-bigquery:reddit_comments.2017_04] 
WHERE score>6 
AND body!='[removed]' 
AND body!='[deleted]' 
AND subreddit='philosophy' OR subreddit = 'academia'
LIMIT 40'''